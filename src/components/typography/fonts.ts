import { Inter, Caprasimo } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const caprasimo = Caprasimo({
  subsets: ["latin"],

  weight: ["400"],
  variable: "--font-caprasimo",
});
