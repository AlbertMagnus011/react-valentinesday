import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Indie_Flower } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { AppProvider } from "@/contexts/AppContext";
import {  } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  variable: '--font-indie-flower',
  weight: "400"
});

const manrope = Manrope ({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Nossa História juntos ❤️",
  description: "Uma experiência interativa sobre o nosso relacionamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={cn(cormorant.variable, manrope.variable)}>
      <body
        className={`  ${cormorant.variable}${manrope.variable} ${indieFlower.variable} antialiased`}
      >
        <ThemeProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
