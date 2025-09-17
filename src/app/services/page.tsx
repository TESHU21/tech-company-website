import { Header } from '../../components/Header';
import { ServicesSection } from '../../components/ServicesSection';
import  Footer  from '../../components/Footer';
import { FloatingElements } from '../../components/FloatingElements';
import Service from './(components)/Service';
import ServiceHeader from './(components)/ServiceHeader';

export default function ServicesPage() {
  return (
    <>
      {/* <FloatingElements /> */}
      <Header />
      <ServiceHeader/>
      <main className="relative ">
        <ServicesSection />
      </main>
    
    </>
  );
}