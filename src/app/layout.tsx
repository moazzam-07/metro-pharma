import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"]
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Metro Pharma — Precision Pharmaceutical & Chemical Processing Machinery",
  description: "Established in 2005, Metro Pharma manufactures cGMP-compliant Vibro Sifters, Multi Mills, Colloid Mills, Auto Coaters, Fluid Bed Dryers, and complete granulation lines.",
  icons: {
    icon: "/assets/logo/icon.png",
    shortcut: "/assets/logo/icon.png",
    apple: "/assets/logo/icon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
