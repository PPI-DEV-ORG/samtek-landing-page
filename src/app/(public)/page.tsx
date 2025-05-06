import { StatsSection } from '@/components/layout/section/section-stats';
import { FeatureSection } from './_components/feature';
import { OurClientsSection } from './_components/our-clients';
import { ConsultationSection } from './_components/consultation';
import { HeroSection } from '@/components/layout/header/hero';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <OurClientsSection />
      <ConsultationSection />
    </>
  );
}
