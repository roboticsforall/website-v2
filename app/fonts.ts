import { Be_Vietnam_Pro } from "next/font/google";

// app/fonts.ts
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-bevietnampro",
  weight: ["400", "700"],
});

export const fonts = {
  beVietnamPro,
};
