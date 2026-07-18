"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaArrowUp, FaStar } from "react-icons/fa";
import Link from "next/link";
import DotField from "@/components/animated/DotField";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-28 select-none">
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Title and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Huge Headline */}
            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-black uppercase leading-none">
              <div className="flex flex-row gap-4">
                <span className="block bg-neo-pink border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[-1deg] mb-3">
                  SEMTIK
                </span>
                <span className="block bg-neo-yellow border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[1deg] mb-3">
                  2026
                </span>
              </div>
              <span className="block text-4xl sm:text-[50px] font-black text-black mt-2">
                Seminar Informatika 2026
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-8 max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-black border-l-4 border-black pl-4">
              Menyelaraskan pengembangan diri dengan inovasi teknologi. Saatnya
              tingkatkan potensi, kuasai tren digital terkini, dan bangun dampak
              nyata bersama para praktisi industri.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/daftar-seminar"
                className="neo-btn bg-neo-yellow text-base group gap-2"
              >
                Daftar Sekarang
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#agenda"
                className="neo-btn bg-white hover:bg-muted text-base"
              >
                Lihat Agenda
              </Link>
            </div>

            {/* Info Cards Grid */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Date Card */}
              <div className="neo-card bg-neo-blue">
                <Calendar className="size-6 text-black mb-2" />
                <h3 className="font-mono text-xs uppercase font-bold text-black/85">
                  Tanggal
                </h3>
                <p className="font-black text-base text-black mt-1 leading-tight">
                  Desember 2026
                </p>
                <p className="font-mono text-xs text-black/75 mt-0.5">TBA</p>
              </div>

              {/* Location Card */}
              <div className="neo-card bg-[#55E6A5]">
                <MapPin className="size-6 text-black mb-2" />
                <h3 className="font-mono text-xs uppercase font-bold text-black/85">
                  Lokasi
                </h3>
                <p className="font-black text-base text-black mt-1 leading-tight">
                  Gedung Serba Guna Universitas Al-Khairiyah
                </p>
                <p className="font-mono text-xs text-black/75 mt-0.5">
                  Cilegon, Banten
                </p>
              </div>

              {/* Quota Card */}
              <div className="neo-card bg-[#FF8A3D] flex flex-col justify-between">
                <div>
                  <Users className="size-6 text-black mb-2" />
                  <h3 className="font-mono text-xs uppercase font-bold text-black/85">
                    Sisa Kuota
                  </h3>
                  <p className="font-black text-base text-black mt-1 leading-tight">
                    250 Kursi
                  </p>
                </div>
                {/* Progress bar */}
                <div className="mt-3">
                  <div className="h-4 w-full border-2 border-black bg-white overflow-hidden">
                    <div
                      className="h-full bg-[#55E6A5]"
                      style={{ width: "0%" }}
                    />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] font-bold text-black mt-1">
                    <span>0% Terisi</span>
                    <span>Ayo Daftar!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Visual Canvas */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            <div className="relative w-full max-w-[400px] aspect-square border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col items-center justify-center p-8">
              {/* Central badge */}
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 2 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative z-10 border-4 border-black bg-[#FFE44D] p-6 text-center shadow-[6px_6px_0px_0px_#000] rotate-2 cursor-pointer hover:rotate-[-2deg] transition-all"
              >
                <Image
                  src="/images/logo.png"
                  alt="Hero"
                  width={200}
                  height={200}
                />
              </motion.div>

              {/* Floating Shape: Star */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 12, ease: "linear" },
                }}
                className="absolute top-8 left-8 z-20 text-black pointer-events-none"
              >
                <FaStar className="size-12 fill-[#5B8CFF] stroke-black stroke-[20]" />
              </motion.div>

              {/* Floating Shape: Arrow */}
              <motion.div
                animate={{
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 right-8 z-20 text-black pointer-events-none"
              >
                <FaArrowUp className="size-12 fill-[#5B8CFF] stroke-black stroke-[20]" />
              </motion.div>

              {/* Floating Shape: Circle Accent */}
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-10 z-0 size-16 rounded-full border-4 border-black bg-[#55E6A5] opacity-80"
              />

              {/* Floating Shape: Orange Square */}
              <motion.div
                animate={{
                  rotate: [15, -15, 15],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 z-0 size-14 border-4 border-black bg-[#FF8A3D] -rotate-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
