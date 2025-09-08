import WhoWeAre from './(components)/WhoWeAre';
import MissionVisionValues from './(components)/MissionVisionValues';
import TeamSection from './(components)/TeamSection';
import TestimonialsSection from './(components)/TestimonialsSection';

export default function AboutPage() {
  return (
    <>
    
     
      <main className="relative  ">
        <WhoWeAre />
        <MissionVisionValues />
        <TeamSection />
        <TestimonialsSection />
      </main>
    
    </>
  );
}