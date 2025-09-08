import React from 'react'
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import AboutPage from '../about/page';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import Footer  from '@/components/Footer';
import { FloatingElements } from '@/components/FloatingElements';
const page = () => {
  return (
    <div>
           <HeroSection />
           <AboutPage />
        <ProblemSolutionSection />
        <ServicesSection />
        <FeaturesSection />
        <PortfolioSection />
        <ContactSection />
    </div>
  )
}

export default page