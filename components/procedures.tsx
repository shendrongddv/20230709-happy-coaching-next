import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Talk to me first",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    img: "step-1.svg",
  },
  {
    id: 2,
    title: "Schedule a meeting",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    img: "step-2.svg",
  },
  {
    id: 3,
    title: "Online consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    img: "step-3.svg",
  },
  {
    id: 4,
    title: "Ready to start? Let’s talk!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    img: "step-4.svg",
  },
];

const Procedures = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col gap-16">
        {/* # */}
        <div className="md:w-1/2">
          <span>How does it work?</span>
          <h2 className="h2 font-extrabold text-primary">
            Are you ready to transform your life?
          </h2>
          <p className="mt-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        {/* # */}
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          {/* ## */}
          <div className="space-y-8 md:w-6/12">
            {steps?.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-[#FAF8F6]">
                  <Image
                    src={`/steps/${item.img}`}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* ## */}
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
    </section>
  );
};

export default Procedures;
