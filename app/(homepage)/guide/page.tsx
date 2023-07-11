import Image from "next/image";

import { CTABeta, CTAImageBeta } from "@/components/call-to-action";
import { HeroGuide } from "@/components/hero";
import { HowItsWork } from "@/components/how-its-work";
import { ReviewCardB } from "@/components/review-card";
import { StepCardC } from "@/components/step-card";

const GuidePage = () => {
  return (
    <>
      {/* Hero */}
      <HeroGuide />
      {/* ./ Hero */}

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

      {/* <HowItsWork /> */}

      {/* How Its Work */}
      <section id="how-its-work" className="isolate bg-white pb-24">
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

      {/* Dont Miss It */}
      <CTAImageBeta />
      {/* ./ Dont Miss It */}
    </>
  );
};

export default GuidePage;
