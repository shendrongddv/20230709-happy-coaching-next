import Image from "next/image";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Lura Perez",
    job: "Marketing",
    text: "political kids double tea battle wire clothing government weak sets opposite metal sun including class fly reader friend.",
    img: "1.png",
  },
  {
    id: 2,
    name: "Callie Allison",
    job: "Model",
    text: "studied struck put scene people five none wherever swept sets complete prepare care position adventure weak area nearby organization complet.",
    img: "2.png",
  },
  {
    id: 3,
    name: "Lucille Daniel",
    job: "Housewife",
    text: "task explanation become class wind coat degree shut length report measure actually place transportation club grown continued fa.",
    img: "3.png",
  },
  {
    id: 4,
    name: "Georgia Jennings",
    job: "Manager",
    text: "shells thin worried saved proper bet since night cell feed came calm breakfast largest eat mother shadow sharp.",
    img: "3.png",
  },
];

// Review Card A
// -> Homepage -> after Our Services Section
export const ReviewCardA = () => {
  const items = reviews.slice(0, 3);

  return (
    <>
      {items?.map((item) => (
        <div
          key={item.id}
          className="my-shadow flex flex-col justify-between bg-white p-12"
        >
          <p className="text-2xl">&quot;{item.text}&quot;</p>
          <div>
            <h3 className="mt-6 text-2xl font-bold text-[#333461]">
              {item.name}
            </h3>
            <Image
              src={`/reviews/${item.img}`}
              alt={item.name}
              width={70}
              height={70}
              className="mt-4 h-[70px] w-auto rounded-full"
            />
            <div className="mt-4 flex items-center gap-1">
              <Star className="h-5 w-5 text-[#FEC84B]" />
              <Star className="h-5 w-5 text-[#FEC84B]" />
              <Star className="h-5 w-5 text-[#FEC84B]" />
              <Star className="h-5 w-5 text-[#FEC84B]" />
              <Star className="h-5 w-5 text-[#DBDEE6]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// Review Card B
// -> Guide page -> after CTA section
// -> Extra page -> after CTA section
export const ReviewCardB = () => {
  const items = reviews;

  return (
    <>
      {items?.map((item) => (
        <div
          key={item.id}
          className="my-shadow flex flex-col items-center border border-slate-100  bg-white p-5 text-center"
        >
          <p>&quot;{item.text}&quot;</p>

          <Image
            src={`/reviews/${item.img}`}
            alt={item.name}
            width={70}
            height={70}
            className="mt-8 h-16 w-16 rounded-full"
          />

          <h3 className="mt-4 text-xl font-bold text-primary">{item.name}</h3>

          <span className="mt-1 opacity-75">{item.job}</span>

          <div className="mt-4 flex items-center gap-1">
            <Star className="h-5 w-5 text-[#FEC84B]" />
            <Star className="h-5 w-5 text-[#FEC84B]" />
            <Star className="h-5 w-5 text-[#FEC84B]" />
            <Star className="h-5 w-5 text-[#FEC84B]" />
            <Star className="h-5 w-5 text-[#DBDEE6]" />
          </div>
        </div>
      ))}
    </>
  );
};
