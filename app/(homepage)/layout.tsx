import NavbarMain from "@/components/header/navbar-main";
import FooterMain from "@/components/footer/footer-main";
import CallToAction from "@/components/call-to-action";

export const metadata = {
  title: "Happy Coaching",
  description: "Andri Irawan a.k.a Shendrong",
};

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarMain />
      <main>{children}</main>
      <CallToAction />
      <FooterMain />
    </>
  );
}
