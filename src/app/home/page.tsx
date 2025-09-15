import React from 'react'
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import AboutUs from '../about/(components)/AboutUs';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import Footer  from '@/components/Footer';
import { FloatingElements } from '@/components/FloatingElements';
const page = () => {
  return (
    <main>
        <Header/>
          <HeroSection />
           <AboutUs/>
        <ProblemSolutionSection />
        <ServicesSection />
        <FeaturesSection />
        <PortfolioSection />
        <ContactSection />
    </main>
  )
}

export default page