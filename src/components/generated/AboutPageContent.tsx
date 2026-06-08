"use client";

import React from 'react';
import { AboutSection } from './AboutSection';
import { CompanyIntroSection } from './CompanyIntroSection';
import { TrustSection } from './TrustSection';
import { JourneyTimelineSection } from './JourneyTimelineSection';
import { MissionVisionSection } from './MissionVisionSection';
import { CoreValuesSection } from './CoreValuesSection';
import { WhyTrustUsSection } from './WhyTrustUsSection';
import { TeamSection } from './TeamSection';
import { TrustedBrandsSection } from './TrustedBrandsSection';
import { ResultsImpactSection } from './ResultsImpactSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';
import { FinalCTASection } from './FinalCTASection';

export const AboutPageContent: React.FC = () => {
  return (
    <>
      <AboutSection />
      <CompanyIntroSection />
      <TrustSection />
      <JourneyTimelineSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <WhyTrustUsSection />
      <TeamSection />
      <TrustedBrandsSection />
      <ResultsImpactSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};
