import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
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
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
