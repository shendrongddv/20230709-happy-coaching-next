import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Talk to me first",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "step-1.svg",
  },
  {
    id: 2,
    title: "Schedule a meeting",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "step-2.svg",
  },
  {
    id: 3,
    title: "Online consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "step-3.svg",
  },
  {
    id: 4,
    title: "Ready to start? Let’s talk!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "step-4.svg",
  },
  {
    id: 5,
    title: "Ready to start? Let’s talk!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "step-4.svg",
  },
  {
    id: 6,
    title: "Ready to start? Let’s talk!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "step-4.svg",
  },
];

const ProceduresBeta = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-16">
        {/* # */}
        <div className="text-center md:w-2/3">
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
        {/* # */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 text-center"
            >
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
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresBeta;
