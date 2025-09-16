import React from 'react'
import PageHeader from '@/components/PageHeader'

const ServiceHeader:React.FC = () => {
  return (
    <div className=' '>
         <PageHeader
        title="Service"
        bgImage="/images/ServiceImg.png" // ✅ replace with your image path
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service" },
        ]} 
        
      />
    </div>
  )
}

export default ServiceHeader