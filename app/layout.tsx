import { Kumbh_Sans } from "next/font/google";

import "./globals.css";

import NavbarMain from "@/components/navbar-main";
import FooterMain from "@/components/footer-main";
import CallToAction from "@/components/call-to-action";

const fontBody = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en">
      <body className={fontBody.className}>
        <NavbarMain />
        <main>{children}</main>
        <CallToAction />
        <FooterMain />
      </body>
    </html>
  );
}
