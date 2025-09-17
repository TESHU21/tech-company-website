import { Header } from '../../components/Header';
import { ContactSection } from '../../components/ContactSection';
import  Footer  from '../../components/Footer';
import { FloatingElements } from '../../components/FloatingElements';
import ContactUs from './(component)/ContactUs';

export default function ContactPage() {
  return (
    <>
      <FloatingElements />
      <Header/>
      <ContactUs/>
      
      <main className="relative ">
        <ContactSection />
      </main>
    
    </>
  );
}