import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MathTechLab",
  description:
    "Review the terms and conditions for using MathTechLab and its content.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        These Terms of Service ("Terms") govern your use of MathTechLab,
        accessible at https://mathtechlab.com. By using our website, you agree
        to be bound by these Terms. If you do not agree, please do not use our
        site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of the Site</h2>
      <p className="mb-4">
        MathTechLab provides educational content and interactive math games. You
        may use the site for personal, non-commercial use only. You agree not to
        misuse the site or access it using automated means (e.g., bots or
        scrapers).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Intellectual Property
      </h2>
      <p className="mb-4">
        All content on MathTechLab, including games, graphics, and written
        materials, is the property of MathTechLab or its licensors. You may not
        reproduce, distribute, or create derivative works without permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. User Conduct</h2>
      <p className="mb-4">
        You agree not to use the site in any way that is unlawful, harmful, or
        disruptive to other users or the operation of the service. We reserve
        the right to restrict access or remove content at our discretion.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Disclaimers</h2>
      <p className="mb-4">
        MathTechLab is provided "as is" without warranties of any kind. We do
        not guarantee the accuracy or completeness of the content. Use the site
        at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Limitation of Liability
      </h2>
      <p className="mb-4">
        MathTechLab will not be held liable for any damages arising from the use
        or inability to use the website. This includes, but is not limited to,
        indirect or consequential damages.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Continued use of the site
        constitutes your acceptance of the revised Terms. Please check this page
        periodically.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by and construed in accordance with the laws of
        your local jurisdiction, without regard to conflict of law principles.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact</h2>
      <p>
        If you have any questions about these Terms, please contact us at:{" "}
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
