import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import Footer  from '@/components/Footer';
import { FloatingElements } from '@/components/FloatingElements';
import WhoWeAre from './about/(components)/WhoWeAre';

export default function HomePage() {
  return (
    <>
      <FloatingElements />
      
      <main className="relative">
        <HeroSection />
        <WhoWeAre/>
        <ProblemSolutionSection />
        <ServicesSection />
        <FeaturesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      
    </>
  );
}