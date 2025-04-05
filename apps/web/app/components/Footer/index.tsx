import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-8 px-4 py-6 text-center">
      <div className="mb-2 space-x-4">
        <Link href="/privacy-policy" className="hover:underline text-sm">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="hover:underline text-sm">
          Terms of Service
        </Link>
        <Link href="/sitemap.xml" className="hover:underline text-sm">
          Sitemap
        </Link>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MathTechLab. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
