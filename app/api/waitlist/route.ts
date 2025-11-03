import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is properly configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("Supabase environment variables not configured");
      return NextResponse.json(
        { error: "Service temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    // Check if using placeholder values
    if (process.env.NEXT_PUBLIC_SUPABASE_URL === "https://placeholder.supabase.co") {
      console.error("Supabase is not configured - using placeholder values");
      return NextResponse.json(
        { error: "Waitlist service is not yet configured. Please contact support." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, company } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingSubmission } = await supabase
      .from("waitlist_submissions")
      .select("email")
      .eq("email", email.toLowerCase())
      .single();

    if (existingSubmission) {
      return NextResponse.json(
        { error: "This email is already on our waitlist" },
        { status: 409 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("waitlist_submissions")
      .insert([
        {
          name: name.trim(),
          email: email.toLowerCase().trim(),
          company: company?.trim() || null,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save your information. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
