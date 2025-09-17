import React from 'react'
import PageHeader from '@/components/PageHeader'

const ContactHeader:React.FC = () => {
  return (
    <div className=' '>
         <PageHeader
        title="Contact"
        bgImage="/images/ContactusImg.png" // ✅ replace with your image path
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]} 
        
      />
    </div>
   
  )
}

export default ContactHeader