import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DontMissIt = () => {
  return (
    <section className="px-4 pb-24">
      <div className="container">
        <div className="flex flex-col gap-y-16 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-6/12">
            <h2 className="h2 font-extrabold text-primary">
              Don&apos;t miss out on my{" "}
              <span className="text-secondary">
                &quot;Live life at the full potential&quot;
              </span>{" "}
              free guide
            </h2>
            <p className="mt-8 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
            <p className="mt-6 text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.{" "}
            </p>
            <Link
              href="guide"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  className:
                    "mt-12 w-full text-white md:min-w-[160px] md:max-w-[200px]",
                })
              )}
            >
              Get your free guide now
            </Link>
          </div>

          {/* Col */}
          <div className="w-full max-md:pl-8 md:w-max">
            <Image
              src="/assets/3.png"
              alt="Image"
              width={478}
              height={616}
              className="h-auto w-full md:w-[478px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DontMissIt;
