import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { Countdown } from '@/components/landing/countdown';
import { About } from '@/components/landing/about';
import { Speakers } from '@/components/landing/speakers';
import { Schedule } from '@/components/landing/schedule';
import { Sponsors } from '@/components/landing/sponsors';
import { RegistrationCTA } from '@/components/landing/cta';
import { FAQ } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-white text-black selection:bg-[#FFE44D] selection:text-black antialiased'>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Speakers />
        <Schedule />
        <Sponsors />
        <RegistrationCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
