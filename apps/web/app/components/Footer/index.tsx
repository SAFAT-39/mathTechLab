import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} MathTechLab. All rights reserved.
          </div>
          <nav className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-gray-600 hover:text-purple-600 text-sm font-medium transition-colors"
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
