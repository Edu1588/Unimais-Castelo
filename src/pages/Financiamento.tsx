import FinanciamentoHero from '../components/FinanciamentoHero';
import PlanningSection from '../components/PlanningSection';
import Testimonials from '../components/Testimonials';
import SocialProof from '../components/SocialProof';
import WhyChooseUsFinanciamento from '../components/WhyChooseUsFinanciamento';
import FAQFinanciamento from '../components/FAQFinanciamento';
import CTAFinanciamento from '../components/CTAFinanciamento';
import OurStores from '../components/OurStores';

export default function Financiamento() {
  return (
    <>
      <FinanciamentoHero />
      <PlanningSection />
      <WhyChooseUsFinanciamento />
      <SocialProof />
      <Testimonials />
      <OurStores />
      <FAQFinanciamento />
      <CTAFinanciamento />
    </>
  );
}
