import FrequentlyAskedQuestions from "@/components/faq";
import { HeroServices } from "@/components/hero";
import Procedures from "@/components/procedures";
import ServicecBeta from "@/components/services-beta";

const ServicesPage = () => {
  return (
    <>
      <HeroServices />
      <ServicecBeta />
      <Procedures />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default ServicesPage;
