"use client";

import { motion, useTransform } from "motion/react";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DotField from "@/components/animated/DotField";
import { MotionValue } from "motion";
import { ProgressBar } from "./ui/progress-bar";

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
      className="sticky top-0 min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden border-b-4 border-black bg-white select-none py-[clamp(1rem,2.5vh,3rem)] flex items-center"
    >
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <DotField
          className="absolute inset-0 pointer-events-none"
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          gradientFrom="#111111"
          gradientTo="#5795d9"
          cursorForce={0.1}
          bulgeOnly
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex">
        <div className="flex flex-col justify-center items-center">
          {/* Huge Headline */}
          <h1 className="text-center md:text-start font-black tracking-tight text-black uppercase leading-none">
            <motion.div
              style={{ rotate }}
              className="flex flex-row flex-wrap gap-[clamp(0.5rem,1.2vw,1rem)] justify-center md:justify-center"
            >
              <Image
                src="/images/logo.png"
                alt="Semtiks Logo"
                width={150}
                height={150}
              />
            </motion.div>
            <span className="block text-[clamp(1.5rem,3.8vw,3.25rem)] font-black text-black mt-[clamp(0.35rem,0.8vh,0.75rem)] leading-[1.1] tracking-tight">
              Seminar Teknik Informatika 2026
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-[clamp(0.875rem,2vh,1.75rem)] max-w-2xl text-[clamp(0.875rem,1.2vw,1.25rem)] font-medium leading-relaxed text-black border-l-4 border-black pl-[clamp(0.75rem,1.5vw,1.25rem)]">
            Menyelaraskan pengembangan diri dengan inovasi teknologi. Saatnya
            tingkatkan potensi, kuasai tren digital terkini, dan bangun dampak
            nyata bersama para praktisi industri.
          </p>

          {/* Actions */}
          <div className="mt-[clamp(1rem,2.2vh,2.25rem)] flex flex-wrap gap-[clamp(0.75rem,1.5vw,1.25rem)]">
            <Link
              href="/daftar-seminar"
              className="neo-btn bg-neo-yellow text-[clamp(0.875rem,1.1vw,1.125rem)] group gap-2 px-[clamp(1rem,1.8vw,1.5rem)] py-[clamp(0.5rem,1vh,0.875rem)]"
            >
              Daftar Sekarang
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#agenda"
              className="neo-btn bg-white hover:bg-muted text-[clamp(0.875rem,1.1vw,1.125rem)] px-[clamp(1rem,1.8vw,1.5rem)] py-[clamp(0.5rem,1vh,0.875rem)]"
            >
              Lihat Agenda
            </Link>
          </div>

          {/* Info Cards Grid */}
          <div className="hidden mt-[clamp(1.25rem,2.5vh,2.5rem)] md:grid grid-cols-1 gap-[clamp(0.65rem,1.2vw,1.25rem)] sm:grid-cols-3">
            {/* Date Card */}
            <div className="neo-card bg-neo-blue p-[clamp(0.65rem,1.2vw,1.25rem)] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <Calendar className="size-[clamp(1.125rem,1.8vw,1.5rem)] text-black mb-1" />
                <h3 className="font-mono text-[clamp(0.65rem,0.85vw,0.75rem)] uppercase font-bold text-black/85">
                  Waktu
                </h3>
                <p className="font-black text-[clamp(0.85rem,1.1vw,1rem)] text-black mt-0.5 leading-tight">
                  15 Desember 2026
                </p>
              </div>
              <p className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-black/75 mt-0.5">
                08:00 - 12:16 WIB
              </p>
            </div>

            {/* Location Card */}
            <div className="neo-card bg-[#55E6A5] p-[clamp(0.65rem,1.2vw,1.25rem)] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <MapPin className="size-[clamp(1.125rem,1.8vw,1.5rem)] text-black mb-1" />
                <h3 className="font-mono text-[clamp(0.65rem,0.85vw,0.75rem)] uppercase font-bold text-black/85">
                  Lokasi
                </h3>
                <p className="font-black text-[clamp(0.85rem,1.1vw,1rem)] text-black mt-0.5 leading-tight">
                  Gedung Serba Guna, Universitas Al-Khairiyah
                </p>
              </div>
              <p className="font-mono text-[clamp(0.65rem,0.8vw,0.75rem)] text-black/75 mt-0.5">
                Cilegon, Banten
              </p>
            </div>

            {/* Quota Card */}
            <div className="neo-card bg-[#FF8A3D] p-[clamp(0.65rem,1.2vw,1.25rem)] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <Users className="size-[clamp(1.125rem,1.8vw,1.5rem)] text-black mb-1" />
                <h3 className="font-mono text-[clamp(0.65rem,0.85vw,0.75rem)] uppercase font-bold text-black/85">
                  Sisa Kuota
                </h3>
                <p className="font-black text-[clamp(0.85rem,1.1vw,1rem)] text-black mt-0.5 leading-tight">
                  200 Kursi
                </p>
              </div>
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
