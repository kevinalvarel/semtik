'use client';
import { Hero } from '@/components/landing/hero';
import { Countdown } from '@/components/landing/countdown';
import { About } from '@/components/landing/about';
import { Speakers } from '@/components/landing/speakers';
import { Schedule } from '@/components/landing/schedule';
import { Sponsors } from '@/components/landing/sponsors';
import { RegistrationCTA } from '@/components/landing/cta';
import { FAQ } from '@/components/landing/faq';
import { useRef } from 'react';
import { useScroll } from 'motion/react';

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[200dvh]'>
        <Hero scrollYProgress={scrollYProgress} />
        <Countdown />
        <About />
        <Speakers />
        <Schedule />
        <Sponsors />
        <RegistrationCTA />
        <FAQ />
      </main>
    </>
  );
}
