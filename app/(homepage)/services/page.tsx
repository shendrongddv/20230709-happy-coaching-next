import Image from "next/image";

import { HeroServices } from "@/components/hero";
import { ServiceCardB } from "@/components/service-card";
import { StepCardA } from "@/components/step-card";
import { CTAAlpha } from "@/components/call-to-action";
import FAQCard from "@/components/faq-card";

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <HeroServices />
      {/* ./ Hero */}

      {/* Our Services */}
      <section id="our-services" className="px-4 pt-24">
        <div className="container">
          <div className="flex flex-col items-start gap-16">
            {/* # */}
            <div className="mx-auto w-full text-center md:w-1/2">
              <h2 className="h2 font-extrabold text-primary">
                I can help you in these particular areas.
              </h2>
            </div>

            {/* # */}
            <div className="mx-auto w-full text-center md:w-3/4">
              <div className="grid gap-8 md:grid-cols-2">
                <ServiceCardB />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Our Services */}

      {/* How It Works */}
      <section id="how-it-works" className="px-4 pt-24">
        <div className="container">
          <div className="flex flex-col gap-16">
            {/* # */}
            <div className="w-full md:w-1/2">
              <span className="font-semibold">How does it work?</span>
              <h2 className="h2 mt-4 font-extrabold text-primary">
                Are you ready to transform your life?
              </h2>
              <p className="mt-6 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>

            {/* # */}
            <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
              {/* ## Col Right */}
              <div className="space-y-8 md:w-6/12">
                <StepCardA />
              </div>

              {/* ## Col Left */}
              <div className="md:w-5/12">
                <Image
                  src="/assets/sadadxsad.jpg"
                  alt="Image"
                  width={560}
                  height={560}
                  className="h-auto w-full"
                />
              </div>
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

export default ServicesPage;
