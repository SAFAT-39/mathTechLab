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

      <div className="privacy-headline">
        <h1 className="text-xl font-semibold mt-8 mb-2">
          Ezoic Services
        </h1>
      </div>

      <div className="privacy-content">
        <p>
          Ezoic Services<br />
          This website uses the services of Ezoic Inc. (“Ezoic”), including to manage third-party interest-based advertising. Ezoic may employ a variety of technologies on this website, including tools to serve content, display advertisements and enable advertising to visitors of this website, which may utilize first and third-party cookies.

          <br />A cookie is a small text file sent to your device by a web server that enables the website to remember information about your browsing activity. First-party cookies are created by the site you are visiting, while third-party cookies are set by domains other than the one you're visiting. Ezoic and our partners may place third-party cookies, tags, beacons, pixels, and similar technologies to monitor interactions with advertisements and optimize ad targeting.  Please note that disabling cookies may limit access to certain content and features on the website, and rejecting cookies does not eliminate advertisements but will result in non-personalized advertising. You can find more information about cookies and how to manage them <a href="https://allaboutcookies.org/" target="_blank">here</a>.
          <br />The following information may be collected, used, and stored in a cookie when serving personalized ads:
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>IP address</li>
            <li>Operating system type and version</li>
            <li>Device type</li>
            <li>Language preferences</li>
            <li>Web browser type</li>
            <li>Email (in a hashed or encrypted form)</li>
          </ul>
          Ezoic and its partners may use this data in combination with information that has been independently collected to deliver targeted advertisements across various platforms and websites. Ezoic’s partners may also gather additional data, such as unique IDs, advertising IDs, geolocation data, usage data, device information, traffic data, referral sources, and interactions between users and websites or advertisements, to create audience segments for targeted advertising across different devices, browsers, and apps. You can find more information about interest-based advertising and how to manage them <a href="https://youradchoices.com/" target="_blank">here</a>.
          <br />
          You can view Ezoic’s privacy policy <a className="text-blue-600 underline" href="https://ezoic.com/privacy/" target="_blank">here</a>, or for additional information about Ezoic’s advertising and other partners, you can view Ezoic’s advertising partners <a className="text-blue-600 underline" href="https://www.ezoic.com/privacy-policy/advertising-partners/" target="_blank">here</a>.
        </p>
      </div>

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


      <div>
        <span id="ezoic-privacy-policy-embed"></span>
      </div>

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
