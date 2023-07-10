import Image from "next/image";
import { Button } from "./ui/button";

const HeroAbout = () => {
  return (
    <section className="bg-[#FAF8F6] px-4 pt-24">
      <div className="container">
        <div className="-mb-7 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-6/12">
            <span className="font-semibold">
              Proven strategies backed by science for success.
            </span>
            <h1 className="h1 mt-4 font-extrabold text-primary">About Me</h1>
            <p className="mt-6 text-lg">
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
            <Button variant="destructive" size="default" className="mt-8">
              Get your free guide now
            </Button>
          </div>

          <div className="w-full md:w-5/12">
            <div className="relative isolate flex items-center justify-start pt-5">
              {/* Image */}
              <Image
                src="/assets/hero-about.jpg"
                loading="eager"
                alt="Image"
                width={462}
                height={603}
                className="z-10 h-auto w-4/5"
              />

              {/* Decoration 1 */}
              <div className="my-shadow-1 absolute right-0 top-1/2 z-20 flex aspect-square -translate-y-1/2 flex-col items-center justify-center bg-white p-8 text-center md:w-48">
                <Image
                  src="/icons/chats.svg"
                  alt="Chats"
                  width={39}
                  height={39}
                  className="h-9 w-9"
                />
                <span className="mt-6">More than 250+</span>
                <span>Online Sessions</span>
              </div>

              {/* Decoration 2 */}
              <div className="my-shadow-1 absolute -top-3 left-1/4 z-30 flex aspect-square h-10 flex-col items-center justify-center rounded-full bg-white p-8 text-center">
                <Image
                  src="/icons/calendar.svg"
                  alt="Calendar"
                  width={39}
                  height={39}
                  className="h-9 w-9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
