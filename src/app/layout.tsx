import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Marquee from "@/Components/Marquee";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-geist-sans",
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla Update 24",
  description: "Read every update about Bangladesh!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoSerifBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Marquee />

        {children}
      </body>
    </html>
  );
}
