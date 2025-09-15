import { Header } from '../../components/Header';
import { ContactSection } from '../../components/ContactSection';
import  Footer  from '../../components/Footer';
import { FloatingElements } from '../../components/FloatingElements';

export default function ContactPage() {
  return (
    <>
      <FloatingElements />
      <Header/>
      
      <main className="relative ">
        <ContactSection />
      </main>
    
    </>
  );
}