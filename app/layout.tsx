import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Hermann Mandaba - Frontend Web Developer",
  description: "Professional Frontend Web Developer specializing in Next.js, Tailwind CSS, TypeScript, and Responsive Design",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground border-border`}
      >
        <ThemeProvider>
        <LanguageProvider>
      {children}
        </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
