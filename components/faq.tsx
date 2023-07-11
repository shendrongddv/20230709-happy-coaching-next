import { CTAAlpha } from "./call-to-action";
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
        <CTAAlpha />
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
