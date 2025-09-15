import React from 'react'
import PageHeader from '@/components/PageHeader'

const AboutHeader:React.FC = () => {
  return (
    <div>
         <PageHeader
        title="About Us"
        bgImage="/images/AboutH.webp" // ✅ replace with your image path
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]} 
        
      />
    </div>
  )
}

export default AboutHeader