import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ali Asghar | Software Developer & Data Analyst",
  description:
    "IT professional with expertise in data analysis, blockchain development, and building production-ready web applications. Open to opportunities and collaborations.",
  keywords: [
    "Ali Asghar",
    "Software Developer",
    "Data Analyst",
    "Web3",
    "Blockchain",
    "Farcaster",
    "Next.js",
    "React",
    "Pakistan",
  ],
  authors: [{ name: "Ali Asghar" }],
  creator: "Ali Asghar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ali Asghar | Software Developer & Data Analyst",
    description:
      "IT professional with expertise in data analysis, blockchain, and web development. Open to opportunities.",
    siteName: "Ali Asghar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Asghar | Software Developer",
    description:
      "IT professional with expertise in data analysis, blockchain, and web development.",
    creator: "@aleeasghar78",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
