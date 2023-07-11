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

// Step Card A
// -> Services page
export const StepCardA = () => {
  const items = steps.slice(0, 4);

  return (
    <>
      {items?.map((item) => (
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
            <h3 className="text-xl font-bold text-primary">{item.title}</h3>
            <p className="mt-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

// Step Card B
// -> About page -> after Reviews section
export const StepCardB = () => {
  const items = steps;

  return (
    <>
      {items?.map((item) => (
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
    </>
  );
};

// Step CardC
// -> Guide page -> after Reviews section
// -> Extra page -> after How Its Work section
export const StepCardC = () => {
  const items = steps.slice(0, 2);

  return (
    <>
      {items?.map((item) => (
        <div key={item.id} className="flex gap-4">
          <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-white">
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
    </>
  );
};
