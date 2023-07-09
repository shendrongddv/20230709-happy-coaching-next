import Blogs from "@/components/blogs";
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
    </>
  );
}
