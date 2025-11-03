"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for joining our waitlist! We'll be in touch soon.");
        setFormData({ name: "", email: "", company: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to submit. Please check your connection and try again.");
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
              Join the Waitlist
            </h2>
            <p className="text-xl text-accent/70">
              Be among the first to experience FigrOut when we launch.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-secondary/20 p-8 rounded-lg shadow-lg border border-secondary"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-accent mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-accent mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-accent mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Acme Corp"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : "Join Waitlist"}
              </button>

              {status === "success" && (
                <div className="p-4 bg-primary/10 border border-primary rounded-lg">
                  <p className="text-primary text-center font-medium">
                    {message}
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-bildout/10 border border-bildout rounded-lg">
                  <p className="text-bildout text-center font-medium">
                    {message}
                  </p>
                </div>
              )}
            </div>
          </form>

          <p className="text-center text-sm text-accent/60 mt-6">
            We respect your privacy. Read our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
