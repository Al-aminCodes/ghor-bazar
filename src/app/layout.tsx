import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSerifeBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bazar Dhor",
  description: "Online Grocery shop",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifeBengali}  h-full antialiased bg-[#f0f5f0]`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>

        {children}
        <Footer />
      </body>
    </html>
  );
}
