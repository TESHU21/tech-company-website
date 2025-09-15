import { Header } from '../../components/Header';
import { PortfolioSection } from '../../components/PortfolioSection';
import  Footer  from '../../components/Footer';
import { FloatingElements } from '../../components/FloatingElements';

export default function PortfolioPage() {
  return (
    <>
      <FloatingElements />
      <Header/>

      <main className="relative ">
        <PortfolioSection />
      </main>
    </>
  );
}