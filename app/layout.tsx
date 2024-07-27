import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { fonts } from "./fonts";

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
        <Providers>{children}</Providers>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
