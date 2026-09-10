import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import SocialProof from '../components/SocialProof';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import FullImageSection from '../components/FullImageSection';
import DiagnosticSection from '../components/DiagnosticSection';
import OurStores from '../components/OurStores';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <HowItWorks />
      <WhyChooseUs />
      <SocialProof />
      <DiagnosticSection />
      <OurStores />
      <FAQ />
      <CTA />
      <FullImageSection />
    </>
  );
}
