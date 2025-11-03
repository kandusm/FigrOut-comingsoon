import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FigrOut",
  description: "Privacy policy for FigrOut waitlist and website",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-primary text-white py-12">
        <div className="container-custom">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-accent/70 mb-8">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">1. Introduction</h2>
            <p className="text-accent/80 leading-relaxed">
              Welcome to FigrOut. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit
              our website and join our waitlist.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">2. Information We Collect</h2>
            <p className="text-accent/80 leading-relaxed mb-4">
              When you join our waitlist, we collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-accent/80">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Your company name (optional)</li>
              <li>Date and time of submission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">3. How We Use Your Information</h2>
            <p className="text-accent/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-accent/80">
              <li>Notify you when FigrOut launches</li>
              <li>Provide you with updates about our product development</li>
              <li>Send you relevant information about FigrOut and related services</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">4. Data Storage and Security</h2>
            <p className="text-accent/80 leading-relaxed">
              Your data is stored securely using Supabase, a modern database platform with industry-standard
              security measures. We implement appropriate technical and organizational measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">5. Data Sharing</h2>
            <p className="text-accent/80 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your
              information with trusted service providers who assist us in operating our website and conducting
              our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">6. Analytics</h2>
            <p className="text-accent/80 leading-relaxed">
              We use Google Analytics to understand how visitors use our website. This helps us improve our
              service. Google Analytics collects information anonymously and reports website trends without
              identifying individual visitors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">7. Your Rights</h2>
            <p className="text-accent/80 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-accent/80">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw your consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">8. Cookies</h2>
            <p className="text-accent/80 leading-relaxed">
              Our website uses cookies to improve your experience and for analytics purposes. By using our
              website, you consent to our use of cookies in accordance with this privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">9. Changes to This Policy</h2>
            <p className="text-accent/80 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by
              posting the new privacy policy on this page and updating the effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-accent mb-4">10. Contact Us</h2>
            <p className="text-accent/80 leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us
              through our website or via email.
            </p>
          </section>

          <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-secondary">
            <p className="text-accent/70 text-sm">
              This privacy policy applies specifically to the FigrOut waitlist website. For information about
              BildOut's privacy practices, please visit{" "}
              <a
                href="https://bildout.com/privacy"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                bildout.com/privacy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
