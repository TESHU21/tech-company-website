import React from 'react'
import PageHeader from '@/components/PageHeader'
const PortfolioHeader:React.FC = () => {
  return (
    <div className=' '>
         <PageHeader
        title="Portfolio"
        bgImage="/images/PortfolioImg.jpg" // ✅ replace with your image path
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio" },
        ]} 
        
      />
    </div>
  )
}

export default PortfolioHeader