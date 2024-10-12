import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { fonts } from "./fonts";
import { NavbarWrapper } from "./components/Navbar/NavbarWrapper";
import { FooterWrapper } from "./components/Footer/FooterWrapper";

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
        {/* <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        /> */}
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" /> */}
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
