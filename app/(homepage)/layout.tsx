import NavbarMain from "@/components/header/navbar-main";
import FooterMain from "@/components/footer/footer-main";
import { CTAForm } from "@/components/call-to-action";

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
      <main>
        {children}

        {/* CTA Form */}
        <section className="bg-[#FAF8F6] px-4 py-16">
          <div className="container">
            <CTAForm />
          </div>
        </section>
        {/* ./ CTA Form */}
      </main>
      <FooterMain />
    </>
  );
}
