import { CTABeta, CTAImageBeta } from "@/components/call-to-action";
import { HeroGuide } from "@/components/hero";
import { HowItsWork } from "@/components/how-its-work";
import Reviews from "@/components/reviews";
import React from "react";

const GuidePage = () => {
  return (
    <>
      <HeroGuide />
      <CTABeta />
      <Reviews />
      <HowItsWork />
      <CTAImageBeta />
    </>
  );
};

export default GuidePage;
