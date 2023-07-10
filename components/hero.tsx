import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

import HeroAboutImage from "../public/assets/hero-about.png";
import HeroExtraImage from "../public/assets/hero-extra.jpg";
import HeroGuideImage from "../public/assets/hero-guide.png";
import HeroHomeImage from "../public/assets/hero-home.png";
import HeroServicesImage from "../public/assets/hero-services.jpg";

// Hero Home
export const HeroHome = () => {
  return (
    <section id="hero" className="bg-[#FAF8F6] px-4 pt-36">
      <div className="container">
        {/* Flex */}
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-6/12">
            <h1 className="h1 font-extrabold text-primary">
              Live life at the full potential
            </h1>
            <p className="mt-6 text-lg">
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>

            <Link
              href="guide"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  className:
                    "mt-8 w-full text-white md:min-w-[160px] md:max-w-[200px]",
                })
              )}
            >
              Get your free guide now
            </Link>
          </div>

          {/* Col */}
          <div className="w-full md:w-5/12">
            <div className="-mb-8 flex items-center justify-end">
              <Image
                src={HeroHomeImage}
                loading="eager"
                alt="Image"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero Services
export const HeroServices = () => {
  return (
    <section id="hero" className="bg-[#FAF8F6] px-4 pb-24 pt-36">
      <div className="container">
        {/* Flex */}
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-6/12">
            <span className="font-semibold">
              I can help you in these patricular areas.
            </span>
            <h1 className="h1 mt-4 font-extrabold text-primary">
              I help people to discover their true potential
            </h1>
            <p className="mt-6 text-lg">
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
          </div>

          {/* Col */}
          <div className="w-full md:w-5/12">
            <div className="flex items-center justify-end">
              <Image
                src={HeroServicesImage}
                loading="eager"
                alt="Image"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero About
export const HeroAbout = () => {
  return (
    <section id="hero" className="bg-[#FAF8F6] px-4 pt-36">
      <div className="container">
        {/* Flex */}
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-6/12">
            <span className="font-semibold">
              Proven strategies backed by science for success.
            </span>
            <h1 className="h1 mt-4 font-extrabold text-primary">About me</h1>
            <p className="mt-6 text-lg">
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
            <Link
              href="guide"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  className:
                    "mt-8 w-full text-white md:min-w-[160px] md:max-w-[200px]",
                })
              )}
            >
              Get your free guide now
            </Link>
          </div>

          {/* Col */}
          <div className="w-full md:w-5/12">
            <div className="-mb-8 flex items-center justify-end">
              <Image
                src={HeroAboutImage}
                loading="eager"
                alt="Image"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero Extra
export const HeroExtra = () => {
  return (
    <section id="hero" className="bg-[#FAF8F6] px-4 pt-36">
      <div className="container">
        {/* Flex */}
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-6/12">
            <span className="font-semibold">
              Proven strategies backed by science for success.
            </span>
            <h1 className="h1 mt-4 font-extrabold text-primary">
              Self Esteem Therapy
            </h1>
            <p className="mt-6 text-lg">
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
          </div>

          {/* Col */}
          <div className="w-full md:w-5/12">
            <div className="-mb-8 flex items-center justify-end">
              <Image
                src={HeroExtraImage}
                loading="eager"
                alt="Image"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero Guide
export const HeroGuide = () => {
  return (
    <section id="hero" className="bg-[#FAF8F6] px-4 pb-24 pt-36">
      <div className="container">
        {/* Flex */}
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-6/12">
            <h1 className="h1 font-extrabold text-primary">
              Results that speak for themselves
            </h1>
            <p className="mt-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>

          {/* Col */}
          <div className="w-full md:w-5/12">
            <div className="flex items-center justify-end">
              <Image
                src={HeroGuideImage}
                loading="eager"
                alt="Image"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
