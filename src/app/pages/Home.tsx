import { Hero } from '../components/Hero';
import { FeaturedMotorcycles } from '../components/FeaturedMotorcycles';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Financing } from '../components/Financing';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedMotorcycles />
      <WhyChooseUs />
      <Financing />
      <Testimonials />
      <CallToAction />
    </>
  );
}
