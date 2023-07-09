import Image from "next/image";
import { Button } from "./ui/button";

const Hero1 = () => {
  return (
    <section className="bg-[#FAF8F6] px-4 pt-14">
      <div className="container">
        <div className="-mb-7 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="w-full space-y-5 md:w-1/2">
            <h1 className="font text-7xl font-extrabold text-[#333461] md:leading-snug">
              Live life at the full potential
            </h1>
            <p className="text-lg text-[#4A556C]">
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
            <Button variant="destructive" size="default">
              Get your free guide now
            </Button>
          </div>

          <div className="w-full border md:w-1/2">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/1.jpg"
                alt="Image"
                width={462}
                height={603}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
