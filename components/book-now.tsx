import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

const BookNow = () => {
  return (
    <>
      <div className="grid overflow-hidden rounded-3xl bg-[#FAF8F6] md:grid-cols-2">
        <div className="flex h-full flex-col justify-center p-8 md:p-16">
          <h2 className="text-4xl font-extrabold text-[#333461]">
            Get 15-Minutes Complimentary online session.
          </h2>
          <p className="mt-5 text-xl text-[#4A556C]/50">
            Limited Period Offer. Claim Now.
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
            Book Now
          </Link>
        </div>

        <div>
          <Image
            src="/assets/2.png"
            alt="Image"
            width={608}
            height={480}
            className="h-auto w-full"
          />
        </div>
      </div>
    </>
  );
};

export default BookNow;
