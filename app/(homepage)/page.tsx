import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { HeroHome } from "@/components/hero";
import BookNow from "@/components/book-now";
import DontMissIt from "@/components/dont-miss-it";
import { ServiceCardA } from "@/components/service-card";
import { ReviewCardA } from "@/components/review-card";
import { BlogCard } from "@/components/blog-card";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroHome />
      {/* ./ Hero */}

      {/* Our Services */}
      <section id="our-services" className="px-4 pb-24 pt-32">
        <div className="container">
          {/* Image Decoration */}
          <Image
            src="/assets/shape-1.svg"
            alt="Image"
            width={101}
            height={17}
            className="h-4 w-auto"
          />

          {/* Grid */}
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            {/* Col */}
            <div>
              <h2 className="h2 font-extrabold text-primary">
                I can help you in these particular areas.
              </h2>
            </div>
            {/* Col */}
            <div className="space-y-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
              <p className="text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-16 grid md:grid-cols-3">
            <ServiceCardA />
          </div>
        </div>
      </section>
      {/* ./ Our Services */}

      {/* Reviewes */}
      <section id="reviewes" className="px bg-[#FAF8F6] py-24">
        <div className="container">
          <h2 className="h2 font-extrabold text-primary md:w-1/2">
            Hear out what my clients say about me.
          </h2>

          <div className="mt-16 grid gap-9 md:grid-cols-3">
            <ReviewCardA />
          </div>
        </div>
      </section>
      {/* ./ Reviewes */}

      {/* Blogs */}
      <section id="latest-news" className="px-4 py-24">
        <div className="container">
          <div className="flex flex-col items-center gap-16">
            <h2 className="h2 font-extrabold text-primary md:w-2/3 md:text-center">
              Stay Motivated, read the weekly blog articles.
            </h2>

            {/* Blog Card */}
            <div className="grid gap-10 md:grid-cols-3">
              <BlogCard />
            </div>
            {/* ./ Blog Card */}

            <Link
              href="guide"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  className:
                    "w-full text-white md:min-w-[160px] md:max-w-[200px]",
                })
              )}
            >
              Read more blogs
            </Link>
          </div>
        </div>
      </section>
      {/* ./ Blogs */}

      {/* Dont Miss It */}
      <DontMissIt />
      {/* ./ Dont Miss It */}

      {/* Book Now */}
      <section id="book-now" className="px-4 pb-24">
        <div className="container">
          <BookNow />
        </div>
      </section>
      {/* ./ Book Now */}
    </>
  );
}
