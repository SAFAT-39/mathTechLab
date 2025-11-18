import "../globals.css";
import "@mathtechlab/design-system/styles.css";
import "@mathtechlab/ui/styles.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SessionProviderWrapper from "./SessionProviderWrapper";

export const metadata: Metadata = {
  title: "MathTechLab - Explore Math, Games, and Technology",
  description:
    "MathTechLab offers interactive math learning content, engaging games, powerful tools, and insightful blogs connecting mathematics with technology, including machine learning.",
  keywords: [
    "math learning",
    "math games",
    "math tools",
    "mathematics in technology",
    "machine learning and math",
    "times tables",
    "advanced mathematics",
    "math education",
  ],
  openGraph: {
    title: "MathTechLab - Explore Math, Games, and Technology",
    description:
      "Discover math from basic to advanced levels with interactive games, tools, and insightful blogs connecting mathematics to modern technology.",
    url: "https://mathtechlab.com",
    siteName: "MathTechLab",
    type: "website",
    images: [
      {
        url: "https://mathtechlab.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MathTechLab Banner",
      },
    ],
  },
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Head Snippet */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MD8DNH2N');`,
          }}
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6350189879354435"
          crossOrigin="anonymous"
        ></script>
        {/* <script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false"></script>
        <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false"></script>

        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        /> */}
      </head>

      <body>
        {/* Google Tag Manager Body Snippet */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MD8DNH2N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <SessionProviderWrapper>
          {/* <div className="flex flex-col min-h-screen"> */}
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-4">{children}</main>

            {/* Footer */}
            <Footer />
          {/* </div> */}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
