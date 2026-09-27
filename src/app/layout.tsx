import type { Metadata } from "next";
import { DM_Mono, Outfit } from "next/font/google";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SiteFooter, SkipNav } from "@/components/layout/SkipNav";
import { SiteNav } from "@/components/layout/SiteNav";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tejaswini Uppu — Full-Stack Engineer",
    template: "%s · Tejaswini Uppu",
  },
  description:
    "Portfolio of Tejaswini Uppu — Full-Stack Engineer building React, TypeScript, Node.js, and AI-powered systems from Hyderabad, India.",
  keywords: [
    "Tejaswini Uppu",
    "Full-Stack Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "AI",
    "Hyderabad",
  ],
  authors: [{ name: "Tejaswini Uppu" }],
  creator: "Tejaswini Uppu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Tejaswini Uppu — Full-Stack Engineer",
    description:
      "I build digital systems that come alive. React interfaces. TypeScript systems. AI-powered experiences.",
    siteName: "Tejaswini Uppu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejaswini Uppu — Full-Stack Engineer",
    description:
      "Interactive portfolio — React, TypeScript, Node.js, and AI systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SkipNav />
        <SiteNav />
        <CustomCursor />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
