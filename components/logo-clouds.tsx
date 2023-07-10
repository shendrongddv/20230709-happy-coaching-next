import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Layers",
    img: "company-1.svg",
  },
  {
    id: 2,
    name: "Sisyphus",
    img: "company-2.svg",
  },
  {
    id: 3,
    name: "Circooles",
    img: "company-3.svg",
  },
  {
    id: 4,
    name: "Catalog",
    img: "company-4.svg",
  },
  {
    id: 5,
    name: "Quotient",
    img: "company-5.svg",
  },
];

const LogoClouds = () => {
  return (
    <section className="bg-white px-4 py-24">
      <div className="container flex flex-col items-center text-center">
        <span>From startups to the world’s largest companies</span>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center">
          {companies?.map((item) => (
            <div key={item.id} className="w-1/2 md:w-1/5">
              <div className="flex items-center justify-center p-4">
                <Image
                  src={`/assets/${item.img}`}
                  alt={item.name}
                  width={160}
                  height={48}
                  className="h-10 w-auto md:h-12"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoClouds;
