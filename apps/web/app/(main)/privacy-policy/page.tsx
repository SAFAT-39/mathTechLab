import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MathTechLab",
  description:
    "Learn about how we collect, use, and protect your information on MathTechLab.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: October 11, 2025</p>

      <p className="mb-4">
        At MathTechLab ("we", "us", "our"), accessible at
        <a className="text-blue-600 underline ml-1" href="https://mathtechlab.com" target="_blank">https://mathtechlab.com</a>,
        we are committed to protecting your privacy. This Privacy Policy explains
        what information we collect, how we use and share it, and the choices you
        have about your data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Scope</h2>
      <p className="mb-4">
        This Privacy Policy applies to our website, calculators, games, learning
        tools, and any related pages or features that link to this policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Information you provide:</strong> When you contact us, request
          support, submit feedback, or subscribe to updates, we may collect your
          name, email address, and any content you provide.
        </li>
        <li>
          <strong>Usage and device information:</strong> We collect information
          about how you use the site, including pages viewed, features used,
          referring/exit pages, date/time stamps, session duration, and clickstream
          data. We also collect device information (e.g., IP address, device type,
          operating system, browser type, language, and approximate location based
          on IP).
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> We use first- and
          third-party cookies, pixels, and local storage to operate the site,
          remember preferences, analyze traffic, and personalize content and
          advertising. You can manage cookies in your browser settings.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. How We Use Information</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Provide, operate, and improve our website, calculators, and games</li>
        <li>Personalize content and remember your preferences</li>
        <li>Monitor performance, debug issues, and analyze usage trends</li>
        <li>Communicate with you about updates, support, and policy changes</li>
        <li>Detect, prevent, and address fraud, abuse, or security incidents</li>
        <li>Comply with legal obligations and enforce our terms</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Legal Bases (EEA/UK)</h2>
      <p className="mb-4">
        If you are in the EEA/UK, we process personal data under these legal bases:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>Contractual necessity</strong> – to provide requested services</li>
        <li><strong>Legitimate interests</strong> – e.g., to secure and improve our services</li>
        <li><strong>Consent</strong> – e.g., for certain cookies or marketing (where required)</li>
        <li><strong>Legal obligation</strong> – to comply with applicable laws</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. When We Share Information</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Service providers:</strong> We work with vendors who help us
          host the site, analyze usage, measure performance, and deliver content
          and advertising. They may access information only to perform services for
          us and under appropriate safeguards.
        </li>
        <li>
          <strong>Analytics and advertising partners:</strong> We may share
          pseudonymous or aggregated data with analytics and ad partners to measure
          engagement and deliver relevant content and ads.
        </li>
        <li>
          <strong>Legal and safety:</strong> We may disclose information to comply
          with law, protect our rights, users, or the public, or respond to legal
          requests.
        </li>
        <li>
          <strong>Business transfers:</strong> In connection with a merger,
          acquisition, or asset sale, information may be transferred as permitted
          by law.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Cookies and Tracking</h2>
      <p className="mb-4">
        Cookies are small files placed on your device. We use necessary cookies to
        run the site and optional cookies for analytics and personalization. You
        can disable cookies via your browser settings. Learn more at
        <a className="text-blue-600 underline ml-1" href="https://allaboutcookies.org" target="_blank">allaboutcookies.org</a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Ads and Analytics</h2>
      <p className="mb-4">
        We may use analytics tools (e.g., Google Analytics) and monetization/ads
        partners that use cookies and similar technologies to understand usage and
        improve relevance.</p>
      <div>
        <span id="ezoic-privacy-policy-embed"></span>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Data Retention</h2>
      <p className="mb-4">
        We retain information for as long as needed to provide services, comply
        with legal obligations, resolve disputes, and enforce our agreements. The
        retention period may vary based on the type of data and purpose.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Security</h2>
      <p className="mb-4">
        We use reasonable technical and organizational measures to protect your
        information. However, no method of transmission or storage is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. International Transfers</h2>
      <p className="mb-4">
        Your information may be processed outside your country of residence. We
        take steps to ensure appropriate safeguards are in place when required by
        law.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Children's Privacy</h2>
      <p className="mb-4">
        Our services are intended for general audiences, including students. We
        do not knowingly collect personal information from children under 13
        (or a higher age as required by local law) without appropriate consent. If
        you believe a child has provided personal information, please contact us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">12. Your Rights and Choices</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Access, correct, or delete certain information you provided</li>
        <li>Object to or restrict certain processing (where applicable)</li>
        <li>Withdraw consent where processing is based on consent</li>
        <li>Manage cookies via your browser or device settings</li>
      </ul>
      <p className="mb-4">
        If you are in the EEA/UK, you may also have the right to data
        portability and to lodge a complaint with your data protection authority.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">13. Third-Party Links</h2>
      <p className="mb-4">
        Our site may contain links to third-party sites. We are not responsible
        for their privacy practices. We encourage you to review their policies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">14. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will post changes
        on this page and update the "Last updated" date above. Your continued use
        of the site means you accept the updated policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">15. Contact Us</h2>
      <p>
        If you have any questions or requests regarding this Privacy Policy,
        contact us at:{" "}
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
