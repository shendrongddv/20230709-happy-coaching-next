import Blogs from "@/components/blogs";
import BookNow from "@/components/book-now";
import DontMissIt from "@/components/dont-miss-it";
import { HeroHome } from "@/components/hero";
import Reviews from "@/components/reviews";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <HeroHome />
      <Services />
      <Reviews />
      <Blogs />
      <DontMissIt />
      <BookNow />
    </>
  );
}
