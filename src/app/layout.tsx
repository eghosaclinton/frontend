import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameGazer",
  description: "The arena is live! Broadcast your gaming tournaments, stream your match, and let the world watch — all from one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oxanium.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system"  enableSystem
            disableTransitionOnChange>
          <Header/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
