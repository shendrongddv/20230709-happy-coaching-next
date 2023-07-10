import FrequentlyAskedQuestions from "@/components/faq";
import { HeroAbout } from "@/components/hero";
import LogoClouds from "@/components/logo-clouds";
import ProceduresBeta from "@/components/procedures-beta";
import Reviews from "@/components/reviews";
import React from "react";

const AboutMePage = () => {
  return (
    <>
      <HeroAbout />
      <LogoClouds />
      <Reviews />
      <ProceduresBeta />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default AboutMePage;
