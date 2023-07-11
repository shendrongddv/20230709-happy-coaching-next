import Image from "next/image";

import { HeroExtra } from "@/components/hero";
import BookNow from "@/components/book-now";
import { CTAAlpha, CTABeta } from "@/components/call-to-action";
import FAQCard from "@/components/faq-card";
import Guarantee from "@/components/guarantee";
import ProCon from "@/components/pro-con";
import { StepCardB, StepCardC } from "@/components/step-card";
import { ReviewCardB } from "@/components/review-card";

const ExtraPage = () => {
  return (
    <>
      <HeroExtra />

      {/* How It Works */}
      <section id="how-it-works" className="px-4 pb-24 pt-32">
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

      {/* How Its Work */}
      <section id="how-its-work-2" className="isolate bg-white pb-24">
        <div className="z-10 bg-[#FAF8F6] px-4 pb-40 pt-24">
          <div className="container">
            {/* # Grid */}
            <div className="grid gap-16 md:grid-cols-2">
              {/* ## Col Left */}
              <div>
                <span className="font-semibold">How does it work?</span>
                <h2 className="h2 mt-4 font-extrabold text-primary">
                  Are you ready to transform your life?
                </h2>
                <p className="mt-8 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  minim veniam.
                </p>
              </div>

              {/* ## Col Right */}
              <div className="space-y-8">
                <StepCardC />
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="px-4">
          <div className="my-shadow-video z-20 mx-auto -mt-24 w-full overflow-hidden rounded-xl md:w-3/5">
            <Image
              src="/assets/Video player.png"
              alt="Image"
              width={768}
              height={432}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
      {/* ./ How Its Work */}

      {/* CTA */}
      <section className="px-4 pt-16">
        <div className="container">
          <CTABeta />
        </div>
      </section>
      {/* ./ CTA */}

      {/* Reviews */}
      <section id="reviews" className="px-4 py-24">
        <div className="container">
          <div className="flex flex-col items-center gap-16">
            <div className="grid gap-8 md:w-3/4 md:grid-cols-2">
              <ReviewCardB />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Reviews */}

      <ProCon />

      {/* Book Now */}
      <section id="book-now" className="px-4 pt-24">
        <div className="container">
          <BookNow />
        </div>
      </section>
      {/* ./ Book Now */}

      {/* Guarantee */}
      <section id="guarantee" className="px-4 pt-24">
        <div className="container">
          <div className="flex flex-col items-center gap-16">
            <Guarantee />
          </div>
        </div>
      </section>
      {/* ./ Guarantee */}

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

export default ExtraPage;
