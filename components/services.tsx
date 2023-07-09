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

const Services = () => {
  return (
    <section className="bg-white px-4 pb-16 pt-32">
      <div className="container">
        <Image
          src="/assets/shape-1.svg"
          alt="Image"
          width={101}
          height={17}
          className="h-4 w-auto"
        />
        <div className="mt-8 grid gap-y-8 md:grid-cols-2">
          <div>
            <h2 className="text-5xl font-extrabold text-[#333461] md:leading-snug">
              I can help you in these particular areas.
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[17px] text-[#4A556C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
            <p className="text-[17px] text-[#4A556C]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>

        <div className="mt-4 grid md:grid-cols-3">
          {services?.map((item) => (
            <div key={item.id} className="p-10">
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
              <p className="mt-4 text-[#4A556C]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
