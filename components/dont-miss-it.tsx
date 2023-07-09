import Image from "next/image";
import { Button } from "./ui/button";

const DontMissIt = () => {
  return (
    <section className="px-4 py-32">
      <div className="container">
        <div className="flex flex-col gap-y-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-1/2">
            <h2 className="h2">
              Don&apos;t miss out on my &quot;Live life at the full
              potential&quot; free guide
            </h2>
            <p className="mt-6 text-[22px] text-[#4A556C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
            <p className="mt-6 text-[17px] text-[#4A556C]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.{" "}
            </p>
            <Button
              variant="destructive"
              size="default"
              className="mt-8 w-full md:w-max"
            >
              Get your free guide now
            </Button>
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
