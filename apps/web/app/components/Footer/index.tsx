import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const gamesData = [
  {
    title: "Number Games",
    items: [
      { title: "24 Game", url: "/games/24-game" },
      { title: "2048 Game", url: "/games/2048" },
    ],
  },
  {
    title: "Math Challenges",
    items: [{ title: "Math Sprint", url: "/games/math-sprint" }],
  },
];

const calculatorsData = [
  {
    title: "Basic Calculators",
    items: [
      { title: "GCF Calculator", url: "/calculators/gcf-calculator" },
      { title: "LCM Calculator", url: "/calculators/lcm-calculator" },
      { title: "Fraction Calculator", url: "/calculators/fraction-calculator" },
      {
        title: "Prime Factorization Calculator",
        url: "/calculators/prime-factorization-calculator",
      },
      { title: "Factor Checker", url: "/calculators/factor-checker" },
      {
        title: "Percentage Calculator",
        url: "/calculators/percentage-calculator",
      },
    ],
  },
  {
    title: "Advanced Calculators",
    items: [{ title: "Graphing Calculator", url: "/calculators/graph" }],
  },
];

const timesTables = Array.from({ length: 12 }, (_, i) => ({
  title: `${i + 1} Times Table`,
  url: `/times-tables/${i + 1}-times-table`,
}));

const factors = [
  ...Array.from({ length: 12 }, (_, i) => ({
    title: `Factors of ${i + 2}`,
    url: `/factors/factors-of-${i + 2}`,
  })),
  { title: "See All Factors", url: "/factors" },
];

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 pt-10 pb-6 text-gray-700">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className=" container flex items-center justify-center">
          <div className="  flex lg:flex-row md:flex-col flex-col justify-between lg:gap-16 gap-10    border-b border-gray-300 pb-10">
            {/* Logo & Description */}
            <div className=" flex flex-col basis-1/4">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  alt="MathTechLab – Math Calculators, Games and Learning"
                  src="/logo.svg"
                  width={120}
                  height={60}
                  className="w-[120px] h-[60px]"
                />
              </Link>
              <p className="text-sm font-semibold leading-relaxed text-gray-600">
                <span className="font-extrabold text-base">MathTechLab</span>{" "}
                makes learning math fun and easy with interactive games, cool
                puzzles, and smart tools. Explore times tables, boost your
                skills, and see how technology makes learning math smarter.
              </p>
            </div>

            <div className=" flex md:flex-row flex-col lg:gap-16 gap-10  ">
              {/* Games */}
              <div className="">
                <h3 className="text-base font-bold mb-3 text-gray-800">
                  Games
                </h3>
                <ul className="space-y-1">
                  {gamesData.flatMap((group) =>
                    group.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.url}
                          className="flex gap-3 pb-1 text-sm font-semibold text-gray-600 hover:text-purple-600 active:text-purple-600 transition-colors duration-200 "
                        >
                          {item.title}
                          <ArrowUpRight size={16} />
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>

              {/* Calculators */}
              <div>
                <h3 className="text-base font-bold mb-3 text-gray-800">
                  Calculators
                </h3>
                <ul className="space-y-1">
                  {calculatorsData.flatMap((group) =>
                    group.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.url}
                          className="flex gap-3 pb-1 text-sm font-semibold text-gray-600 hover:text-purple-600 active:text-purple-600 transition-colors duration-200  "
                        >
                          {item.title}
                          <ArrowUpRight size={16} />
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>

            <div className="flex md:flex-row flex-col lg:gap-16 gap-10 ">
              {/* Times Tables */}
              <div>
                <h3 className="text-base font-bold mb-3 text-gray-800">
                  Times Tables
                </h3>
                <ul className="space-y-1">
                  {timesTables.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.url}
                        className=" flex gap-3 pb-1 text-sm font-semibold text-gray-600 hover:text-purple-600 active:text-purple-600 transition-colors duration-200 "
                      >
                        {item.title}
                        <ArrowUpRight size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Factors */}
              <div>
                <h3 className="text-base font-bold mb-3 text-gray-800">
                  Factors
                </h3>
                <ul className="space-y-1">
                  {factors.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.url}
                        className="flex gap-3 pb-1 text-sm font-semibold text-gray-600 hover:text-purple-600 active:text-purple-600 transition-colors duration-200  "
                      >
                        {item.title}
                        <ArrowUpRight size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 pt-6">
          <div className="mb-3 md:mb-0">
            © {new Date().getFullYear()} MathTechLab. All rights reserved.
          </div>
          <nav className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-purple-600 active:text-purple-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-purple-600 active:text-purple-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-purple-600 active:text-purple-600 transition-colors duration-200"
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
