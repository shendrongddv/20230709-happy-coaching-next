import FrequentlyAskedQuestions from "@/components/faq";
import Guarantee from "@/components/guarantee";
import { HeroExtra } from "@/components/hero";
import ProCon from "@/components/pro-con";
import ProceduresBeta from "@/components/procedures-beta";

const ExtraPage = () => {
  return (
    <>
      <HeroExtra />
      <ProceduresBeta />
      <ProCon />
      <Guarantee />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default ExtraPage;
