import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { fonts } from "./fonts";
import { NavbarWrapper } from "./components/Navbar/NavbarWrapper";
import { FooterWrapper } from "./components/Footer/FooterWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Robotics For All",
  description:
    "Robotics for All is a student-run 501 (c)(3) non-profit organization which aims to level the playing field by teaching STEM in underserved communities.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-3SSN7BQCM1" />
        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=rfa-cms"
        ></script>
      </head>
      <body className={fonts.beVietnamPro.className}>
        <Providers>
          <NavbarWrapper />
          {children}
          <FooterWrapper />
        </Providers>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
