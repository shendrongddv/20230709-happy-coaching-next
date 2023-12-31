import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Star } from "lucide-react";

//  CTA Text Alpha
// -> About Page -> after FAQ Accordion
export const CTAAlpha = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl bg-[#FAF8F6] p-8">
      <h2 className="text-xl font-bold text-primary">Still have questions?</h2>
      <p className="mt-3 text-lg">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>

      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: "secondary",
            className: "mt-8 w-full text-white md:w-max",
          })
        )}
      >
        Get in touch
      </Link>
    </div>
  );
};

// CTA Text Beta
// -> Guide Page -> after Hero
export const CTABeta = () => {
  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-4/5">
          <span className="font-semibold">Testimonials</span>
          <h2 className="h2 font-extrabold text-primary">
            Results that speak for themselves
          </h2>
        </div>

        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "secondary",
              className: "w-full text-white md:w-max",
            })
          )}
        >
          Get started
        </Link>
      </div>
    </>
  );
};

// CTA Text + Image Beta
export const CTAImageBeta = () => {
  return (
    <section className="bg-[url(/assets/bg-1.png)] bg-cover bg-center bg-no-repeat px-4 py-16 md:bg-contain">
      <div className="container">
        <div className="mx-auto flex w-full flex-col items-center text-center md:w-2/3">
          <h2 className="h2 font-extrabold text-primary">
            Don&apos;t miss out on my{" "}
            <span className="text-secondary">
              &apos;Live life at the full potential&apos;
            </span>{" "}
            free guide
          </h2>
          <p className="mt-8 text-xl md:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium.
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "secondary",
                className: "mt-10 w-full text-white md:w-max",
              })
            )}
          >
            Download my free guide
          </Link>
          <div className="mt-16 flex flex-col items-center text-center">
            <span className="opacity-50">More than 100+ 5 star reviews</span>
            <div className="mt-2 flex items-center justify-center gap-1">
              <Star className="h-4 w-4 text-[#FEC84B]" />
              <Star className="h-4 w-4 text-[#FEC84B]" />
              <Star className="h-4 w-4 text-[#FEC84B]" />
              <Star className="h-4 w-4 text-[#FEC84B]" />
              <Star className="h-4 w-4 text-[#FEC84B]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Form
// -> before Footer
export const CTAForm = () => {
  return (
    <>
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:flex-1">
          <h2 className="text-3xl font-extrabold text-[#333461]">
            Get notified when I publish new articles
          </h2>
          <p className="mt-6 text-xl">
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            ></Input>

            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  className: "w-full text-white md:w-max",
                })
              )}
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
