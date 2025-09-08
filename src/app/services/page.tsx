import { Header } from '../../components/Header';
import { ServicesSection } from '../../components/ServicesSection';
import  Footer  from '../../components/Footer';
import { FloatingElements } from '../../components/FloatingElements';

export default function ServicesPage() {
  return (
    <>
      {/* <FloatingElements /> */}
      <Header />
      <main className="relative pt-20">
        <ServicesSection />
      </main>
    
    </>
  );
}