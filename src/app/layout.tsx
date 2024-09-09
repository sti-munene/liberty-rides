import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Inter, Caprasimo } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { HeaderContactInformation } from "@/components/header/contact-information";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caprasimo",
});

export const metadata: Metadata = {
  title: "Liberty Car Rentals",
  description:
    "Rent quality vehicles with Liberty Rides. Fast booking, great rates, and excellent service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${caprasimo.variable}`}
      >
        <NextTopLoader showSpinner={false} color={"#9F2042"} height={4} />
        <HeaderContactInformation />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
