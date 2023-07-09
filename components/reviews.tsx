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

const Reviews = () => {
  return (
    <section className="bg-[#FAF8F6] px-4 pb-52 pt-28">
      <div className="container">
        <h2 className="h2 md:w-5/12">Hear out what my clients say about me.</h2>

        {/* Wrapper */}
        <div className="mt-9 grid gap-9 md:grid-cols-3">
          {/* Col */}
          {reviews?.map((item) => (
            <div key={item.id} className="my-shadow bg-white p-12">
              <p className="text-2xl text-[#4A556C]">&quot;{item.text}&quot;</p>
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
        </div>
      </div>
    </section>
  );
};

export default Reviews;
