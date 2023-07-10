import Image from "next/image";

// How its Work for Free Guide Page
export const HowItsWork = () => {
  return (
    <section>
      <div className="bg-[#FAF8F6] px-4 pb-40">
        <div className="container">
          <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-6/12">
              <span className="font-semibold">How does it work?</span>
              <h2 className="h2 mt-4 font-extrabold text-primary">
                Are you ready to transform your life?
              </h2>
              <p className="mt-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>

            <div className="w-full space-y-8 md:w-6/12">
              {/* Col */}
              <div className="flex gap-4">
                <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-[#FAF8F6]">
                  <Image
                    src="/steps/step-3.svg"
                    alt="Image"
                    width={24}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary">
                    Online consultation
                  </h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>

              {/* Col */}
              <div className="flex gap-4">
                <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-[#FAF8F6]">
                  <Image
                    src="/steps/step-4.svg"
                    alt="Image"
                    width={24}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary">
                    Ready to start? Let&apos;s talk!
                  </h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container -mt-24 pb-24 max-md:px-4">
        <div className="mx-auto w-full overflow-hidden rounded-xl md:w-2/3">
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
  );
};
