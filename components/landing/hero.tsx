'use client';

import { motion, useTransform } from 'motion/react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DotField from '@/components/animated/DotField';
import { MotionValue } from 'motion';
import { ProgressBar } from './ui/progress-bar';

export function Hero({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  return (
    <motion.section
      style={{ opacity, scale }}
      className='sticky top-0 min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden border-b-4 border-black bg-white select-none py-[clamp(1rem,2.5vh,3rem)] flex items-center'
    >
      {/* Grid background */}
      <div className='absolute inset-0 z-0'>
        <DotField
          className='absolute inset-0 pointer-events-none'
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          gradientFrom='#111111'
          gradientTo='#5795d9'
          cursorForce={0.1}
          bulgeOnly
        />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full'>
        <div className='grid grid-cols-1 gap-[clamp(1.25rem,2.5vw,2.5rem)] lg:grid-cols-12 lg:items-center'>
          <div className='lg:col-span-7 flex flex-col justify-center items-center md:items-start'>
            {/* Huge Headline */}
            <h1 className='text-center md:text-start font-black tracking-tight text-black uppercase leading-none'>
              <div className='flex flex-row flex-wrap gap-[clamp(0.5rem,1.2vw,1rem)] justify-center md:justify-start'>
                <span className='inline-block bg-neo-pink border-3 sm:border-4 border-black px-[clamp(0.75rem,1.8vw,1.25rem)] py-[clamp(0.25rem,0.6vw,0.5rem)] text-[clamp(1.25rem,3.2vw,2.5rem)] font-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] rotate-[-1deg] mb-[clamp(0.25rem,0.8vh,0.5rem)] transition-transform hover:rotate-0'>
                  SEMTIK
                </span>
                <span className='inline-block bg-neo-yellow border-3 sm:border-4 border-black px-[clamp(0.75rem,1.8vw,1.25rem)] py-[clamp(0.25rem,0.6vw,0.5rem)] text-[clamp(1.25rem,3.2vw,2.5rem)] font-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] rotate-[1deg] mb-[clamp(0.25rem,0.8vh,0.5rem)] transition-transform hover:rotate-0'>
                  2026
                </span>
              </div>
              <span className='block text-[clamp(1.5rem,3.8vw,3.25rem)] font-black text-black mt-[clamp(0.35rem,0.8vh,0.75rem)] leading-[1.1] tracking-tight'>
                Seminar Nasional Teknik Informatika 2026
              </span>
            </h1>

            {/* Supporting Text */}
            <p className='mt-[clamp(0.875rem,2vh,1.75rem)] max-w-2xl text-[clamp(0.875rem,1.2vw,1.25rem)] font-medium leading-relaxed text-black border-l-4 border-black pl-[clamp(0.75rem,1.5vw,1.25rem)]'>
              Menyelaraskan pengembangan diri dengan inovasi teknologi. Saatnya
              tingkatkan potensi, kuasai tren digital terkini, dan bangun dampak
              nyata bersama para praktisi industri.
            </p>

            {/* Actions */}
            <div className='mt-[clamp(1rem,2.2vh,2.25rem)] flex flex-wrap gap-[clamp(0.75rem,1.5vw,1.25rem)]'>
              <Link
                href='/daftar-seminar'
                className='neo-btn bg-neo-yellow text-[clamp(0.875rem,1.1vw,1.125rem)] group gap-2 px-[clamp(1rem,1.8vw,1.5rem)] py-[clamp(0.5rem,1vh,0.875rem)]'
              >
                Daftar Sekarang
                <ArrowRight className='size-5 transition-transform group-hover:translate-x-1' />
              </Link>
              <Link
                href='#agenda'
                className='neo-btn bg-white hover:bg-muted text-[clamp(0.875rem,1.1vw,1.125rem)] px-[clamp(1rem,1.8vw,1.5rem)] py-[clamp(0.5rem,1vh,0.875rem)]'
              >
                Lihat Agenda
              </Link>
            </div>

            {/* Info Cards Grid */}
            <div className='hidden mt-[clamp(1.25rem,2.5vh,2.5rem)] md:grid grid-cols-1 gap-[clamp(0.65rem,1.2vw,1.25rem)] sm:grid-cols-3'>
              {/* Date Card */}
              <div className='neo-card bg-neo-blue p-[clamp(0.65rem,1.2vw,1.25rem)] flex flex-col justify-between hover:-translate-y-1 transition-transform'>
                <div>
                  <Calendar className='size-[clamp(1.125rem,1.8vw,1.5rem)] text-black mb-1' />
                  <h3 className='font-mono text-[clamp(0.65rem,0.85vw,0.75rem)] uppercase font-bold text-black/85'>
                    Waktu
                  </h3>
                  <p className='font-black text-[clamp(0.85rem,1.1vw,1rem)] text-black mt-0.5 leading-tight'>
                    15 Desember 2026
                  </p>
                </div>
                <p className='font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-black/75 mt-0.5'>
                    08:00 - 12:16 WIB
                </p>
              </div>

              {/* Location Card */}
              <div className='neo-card bg-[#55E6A5] p-[clamp(0.65rem,1.2vw,1.25rem)] flex flex-col justify-between hover:-translate-y-1 transition-transform'>
                <div>
                  <MapPin className='size-[clamp(1.125rem,1.8vw,1.5rem)] text-black mb-1' />
                  <h3 className='font-mono text-[clamp(0.65rem,0.85vw,0.75rem)] uppercase font-bold text-black/85'>
                    Lokasi
                  </h3>
                  <p className='font-black text-[clamp(0.85rem,1.1vw,1rem)] text-black mt-0.5 leading-tight'>
                    Gedung Serba Guna, Universitas Al-Khairiyah
                  </p>
                </div>
                <p className='font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-black/75 mt-0.5'>
                  Cilegon, Banten
                </p>
              </div>

              {/* Quota Card */}
              <div className='neo-card bg-[#FF8A3D] p-[clamp(0.65rem,1.2vw,1.25rem)] flex flex-col justify-between hover:-translate-y-1 transition-transform'>
                <div>
                  <Users className='size-[clamp(1.125rem,1.8vw,1.5rem)] text-black mb-1' />
                  <h3 className='font-mono text-[clamp(0.65rem,0.85vw,0.75rem)] uppercase font-bold text-black/85'>
                    Sisa Kuota
                  </h3>
                  <p className='font-black text-[clamp(0.85rem,1.1vw,1rem)] text-black mt-0.5 leading-tight'>
                    200 Kursi
                  </p>
                </div>
              <ProgressBar/>
              </div>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Visual Canvas */}
          <motion.div
            style={{ scale, rotate }}
            className='lg:col-span-5 relative flex justify-center items-center'
          >
            <div className='relative w-full max-w-[clamp(220px,26vw,350px)] aspect-video border-3 sm:border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:flex flex-col items-center justify-center p-[clamp(0.875rem,2vw,2rem)] hidden'>
              {/* Central badge */}
              <Image
                src='/images/logo.png'
                alt='Hero'
                width={200}
                height={200}
                className='absolute inset-0 -top-40 z-10 w-[clamp(2200px,16vw,2500px)] h-auto object-contain'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
