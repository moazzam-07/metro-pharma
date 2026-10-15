import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
