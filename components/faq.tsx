import FAQCard from "./faq-card";
import { Button } from "./ui/button";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-16">
        {/* # */}
        <div className="text-center md:w-1/2">
          <h2 className="h2 font-extrabold text-primary">Good to know.</h2>
          <p className="mt-4 text-xl">
            Everything you need to know about the my services.
          </p>
        </div>

        {/* # */}
        <div className="md:w-2/3">
          <FAQCard />
        </div>

        {/* # */}
        <div className="flex w-full flex-col items-center rounded-2xl bg-[#FAF8F6] p-8">
          <h2 className="text-xl font-bold text-primary">
            Still have questions?
          </h2>
          <p className="mt-3 text-lg">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <Button
            variant="destructive"
            size="default"
            className="mt-8 w-full md:w-48"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
