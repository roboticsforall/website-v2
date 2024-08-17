import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { fonts } from "./fonts";
import { NavbarWrapper } from "./components/Navbar/NavbarWrapper";
import { FooterWrapper } from "./components/Footer/FooterWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
