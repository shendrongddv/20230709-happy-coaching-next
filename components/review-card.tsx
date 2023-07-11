import Image from "next/image";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jane",
    text: "I gained so much confidence in my ability to connect and deepen my relationships with people.",
    img: "1.png",
  },
  {
    id: 2,
    name: "Catherine",
    text: "I gained so much confidence in my ability to connect and deepen my relationships with people.",
    img: "2.png",
  },
  {
    id: 3,
    name: "Jennie",
    text: "I gained so much confidence in my ability to connect and deepen my relationships with people.",
    img: "3.png",
  },
];

// Review Card
// -> Homepage -> after Our Services Section
export const ReviewCardA = () => {
  return (
    <>
      {reviews?.map((item) => (
        <div key={item.id} className="my-shadow bg-white p-12">
          <p className="text-2xl">&quot;{item.text}&quot;</p>
          <h3 className="mt-4 text-2xl font-bold text-[#333461]">
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
      ))}
    </>
  );
};
