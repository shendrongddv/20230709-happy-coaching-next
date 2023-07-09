import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const BookNow = () => {
  return (
    <section className="px-4 pb-24">
      <div className="container">
        <div className="grid overflow-hidden rounded-3xl bg-[#FAF8F6] md:grid-cols-2">
          <div className="flex h-full flex-col justify-center p-8 md:p-16">
            <h2 className="text-4xl font-extrabold text-[#333461]">
              Get 15-Minutes Complimentary online session.
            </h2>
            <p className="mt-5 text-xl text-[#4A556C]/50">
              Limited Period Offer. Claim Now.
            </p>
            <Button
              variant="destructive"
              size="default"
              className="mt-10 w-full md:w-max"
            >
              Book Now
            </Button>
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
      </div>
    </section>
  );
};

export default BookNow;
