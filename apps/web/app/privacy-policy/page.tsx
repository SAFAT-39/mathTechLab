import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MathTechLab",
  description:
    "Learn about how we collect, use, and protect your information on MathTechLab.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At MathTechLab, accessible from https://mathtechlab.com, we are
        committed to protecting your privacy. This Privacy Policy explains what
        information we collect and how we use it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Usage Data:</strong> We may collect non-personal information
          like browser type, pages visited, and time spent on the site.
        </li>
        <li>
          <strong>Cookies:</strong> We use cookies to enhance your experience
          and track usage statistics.
        </li>
        <li>
          <strong>User-submitted data:</strong> If you contact us or provide
          feedback, we may collect your name and email address.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>To provide and improve our services and user experience</li>
        <li>To monitor usage and identify trends</li>
        <li>To respond to inquiries or support requests</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Third-Party Services
      </h2>
      <p className="mb-4">
        We may use third-party analytics tools such as Google Analytics to help
        us understand how users interact with the site. These tools may collect
        information as described in their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Children's Privacy</h2>
      <p className="mb-4">
        MathTechLab is intended for general audiences, including students and
        children. We do not knowingly collect personal information from children
        under 13. If you believe we have done so, please contact us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You can choose to disable cookies through your browser settings. If you
        contact us, you may request that we delete any personal data we may have
        collected.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        6. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:{" "}
        <a
          href="mailto:contact.mathtechlab@gmail.com"
          className="text-blue-600 underline"
        >
          contact.mathtechlab@gmail.com
        </a>
      </p>
    </main>
  );
}
