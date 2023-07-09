import Blogs from "@/components/blogs";
import BookNow from "@/components/book-now";
import DontMissIt from "@/components/dont-miss-it";
import Hero1 from "@/components/hero-1";
import Reviews from "@/components/reviews";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Hero1 />
      <Services />
      <Reviews />
      <Blogs />
      <DontMissIt />
      <BookNow />
    </>
  );
}
