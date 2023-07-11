import Image from "next/image";

const services = [
  {
    id: 1,
    title: "1:1 Coaching",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img: "service-1.svg",
  },
  {
    id: 2,
    title: "Consultation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img: "service-2.svg",
  },
  {
    id: 3,
    title: "Group Coaching Sessions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img: "service-3.svg",
  },
];

export const ServiceCardA = () => {
  return (
    <>
      {services?.map((item) => (
        <div
          key={item.id}
          className="p-10 transition-colors duration-300 ease-linear first:border hover:bg-neutral-50 hover:first:border-transparent"
        >
          <Image
            src={`/icons/${item.img}`}
            alt={item.title}
            width={72}
            height={72}
            className="h-[72px] w-[72px]"
          />
          <h3 className="mt-8 text-2xl font-bold text-[#041434]">
            {item.title}
          </h3>
          <p className="mt-4">{item.text}</p>
        </div>
      ))}
    </>
  );
};
