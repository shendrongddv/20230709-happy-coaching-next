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
  {
    id: 3,
    title: "Online course",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img: "service-3.svg",
  },
];

const ServicecBeta = () => {
  return (
    <section className="bg-white px-4 pb-10 pt-28">
      <div className="container flex flex-col items-center">
        <h2 className="h2 font-extrabold text-primary md:w-1/2 md:text-center">
          I can help you in these particular areas.
        </h2>

        {/* Grid */}
        <div className="mt-20 grid gap-5 md:w-4/5 md:grid-cols-2">
          {/* Col */}
          {services?.map((item) => (
            <div key={item.id} className="border p-10">
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
        </div>
      </div>
    </section>
  );
};

export default ServicecBeta;
