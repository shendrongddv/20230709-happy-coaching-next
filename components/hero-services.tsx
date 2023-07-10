import Image from "next/image";

const HeroServices = () => {
  return (
    <section className="bg-[#FAF8F6] px-4 py-24">
      <div className="container pt-16">
        {/* Flex */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-1/2">
            <span className="font-semibold">
              I can help you in these patricular areas.
            </span>
            <h1 className="h1 mt-3 font-extrabold text-primary">
              I help people to discover their true potential
            </h1>
            <p className="mt-8 text-lg">
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
          </div>

          {/* Col */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/hero-1.jpg"
                loading="eager"
                alt="Image"
                width={462}
                height={603}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
