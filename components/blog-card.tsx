import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Balancing your love and work life.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img: "1.jpg",
  },
  {
    id: 2,
    title: "A short break from Social Media is important.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img: "2.jpg",
  },
  {
    id: 3,
    title: "How to be 1% Better Every Day",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img: "3.jpg",
  },
];

// Blog Card
// -> Homepage -> after Review Section
export const BlogCard = () => {
  return (
    <>
      {blogs?.map((item) => (
        <div key={item.id} className="border">
          <div className="overflow-hidden">
            <Image
              src={`/blogs/${item.img}`}
              alt={item.title}
              width={356}
              height={160}
              className="h-auto w-full"
            />
          </div>

          <div className="p-7">
            <h3 className="text-2xl font-bold text-[#333461]">{item.title}</h3>
            <p className="mt-3">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};
