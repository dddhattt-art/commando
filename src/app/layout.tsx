import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Commanders Fan Hub",
  description: "Washington Commanders fan app — scores, stats, roster, news, and standings",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto w-full px-4 py-6 flex-1">{children}</main>
        <footer className="bg-[#5A1414] text-white text-center py-4 text-sm mt-8">
          © 2025 Commanders Fan Hub · Not affiliated with the Washington Commanders NFL team
        </footer>
      </body>
    </html>
  );
}
