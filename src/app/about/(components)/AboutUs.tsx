import React from 'react'
import WhoWeAre from '../(components)/WhoWeAre';
import MissionVisionValues from '../(components)/MissionVisionValues';
import TeamSection from '../(components)/TeamSection';
import TestimonialsSection from '../(components)/TestimonialsSection';

const AboutUs:React.FC = () => {
  return (
    <div>
          <WhoWeAre />
        <MissionVisionValues />
        <TeamSection />
        <TestimonialsSection />
    </div>
  )
}

export default AboutUs