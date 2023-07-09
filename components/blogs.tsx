import Image from "next/image";
import { Button } from "./ui/button";

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

const Blogs = () => {
  return (
    <section className="bg-white px-4 py-24">
      <div className="container flex flex-col items-center">
        <h2 className="h2 md:w-1/2 md:text-center">
          Stay Motivated, read the weekly blog articles.
        </h2>

        {/* Wrapper */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {/* Col */}
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
                <h3 className="text-2xl font-bold text-[#333461]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#4A556C]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="destructive"
          size="default"
          className="mt-14 w-full md:w-max"
        >
          Read more blogs
        </Button>
      </div>
    </section>
  );
};

export default Blogs;
