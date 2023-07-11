import Image from "next/image";

const Guarantee = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center">
        <div className="flex w-full flex-col items-center text-center md:w-1/2">
          <Image
            src="/assets/guarantee.svg"
            alt="Guarantee"
            width={244}
            height={208}
            className="h-auto w-1/2"
          />
          <h2 className="h3 mt-6 font-extrabold text-primary">Guarantee</h2>
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
