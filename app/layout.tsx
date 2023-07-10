import { Kumbh_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const fontDisplay = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontBody = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Happy Coaching",
  description: "Andri Irawan a.k.a Shendrong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-full text-[#4a556c] antialiased",
          fontDisplay.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
