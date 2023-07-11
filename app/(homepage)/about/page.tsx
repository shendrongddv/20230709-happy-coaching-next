import { HeroAbout } from "@/components/hero";
import LogoClouds from "@/components/logo-clouds";
import FAQCard from "@/components/faq-card";
import { CTAAlpha } from "@/components/call-to-action";
import { ReviewCardA } from "@/components/review-card";
import { StepCardB } from "@/components/step-card";

const AboutMePage = () => {
  return (
    <>
      {/* Hero */}
      <HeroAbout />
      {/* ./ Hero */}

      {/* Logo Clouds */}
      <LogoClouds />
      {/* ./ Logo Clouds */}

      {/* Reviewes */}
      <section id="reviewes" className="px bg-[#FAF8F6] py-24">
        <div className="container">
          <h2 className="h2 font-extrabold text-primary md:w-1/2">
            Hear out what my clients say about me.
          </h2>

          <div className="mt-16 grid gap-9 md:grid-cols-3">
            <ReviewCardA />
          </div>
        </div>
      </section>
      {/* ./ Reviewes */}

      {/* How It Works */}
      <section id="how-it-works" className="px-4 pt-24">
        <div className="container">
          <div className="flex flex-col items-center gap-16">
            {/* # Title */}
            <div className="flex flex-col items-center text-center md:w-2/3">
              <span className="font-semibold text-secondary">
                How does it work?
              </span>
              <h2 className="h2 mt-4 font-extrabold text-primary">
                Are you ready to transform your life?
              </h2>
              <p className="mt-6 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>

            {/* # Services */}
            <div className="grid w-full gap-8 md:grid-cols-3">
              <StepCardB />
            </div>
          </div>
        </div>
      </section>
      {/* ./ How It Works */}

      {/* FAQ */}
      <section id="faq" className="px-4 py-24">
        <div className="container">
          <div className="flex flex-col items-center gap-16">
            {/* # Title */}
            <div className="mx-auto flex flex-col items-center text-center md:w-2/3">
              <h2 className="h2 font-extrabold text-primary">Good to know.</h2>
              <p className="mt-6 text-xl">
                Everything you need to know about the my services.
              </p>
            </div>

            {/* # Accordion */}
            <div className="mx-auto md:w-2/3">
              <FAQCard />
            </div>

            {/* # CTA */}
            <CTAAlpha />
          </div>
        </div>
      </section>
      {/* ./ FAQ */}
    </>
  );
};

export default AboutMePage;
