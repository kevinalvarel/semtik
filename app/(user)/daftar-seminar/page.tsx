"use client";

import { RegistForm } from "@/components/daftar-seminar/regist-form";
import {
  ArrowLeft,
  Sparkles,
  Terminal,
  Shield,
  Cpu,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 neo-card bg-white z-1">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex flex-row gap-2 items-center justify-center">
              <ArrowLeft className="border-4 border-black w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_0px_#000] rotate-[5deg] bg-neo-blue" />
              <span className="block bg-neo-pink border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[-1deg] mb-3">
                SEMTIK
              </span>
              <span className="block bg-neo-yellow border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[1deg] mb-3">
                2026
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center neo-card-interactive">
          <div className="w-full max-w-xs">
            <RegistForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-neo-yellow border-l-4 border-black overflow-hidden p-12 select-none">
        {/* Centerpiece Neo-Brutalist card */}
        <motion.div
          initial={{ scale: 0.9, rotate: -3 }}
          animate={{ scale: 1, rotate: -1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="relative z-10 border-4 border-black bg-white p-8 max-w-sm shadow-[12px_12px_0px_0px_#000] hover:rotate-[3deg] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-200 absolute"
        >
          {/* Card Badge */}
          <div className="inline-block bg-neo-yellow border-2 border-black px-3 py-1 text-xs font-mono font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] mb-4">
            SEMTIK 2026
          </div>

          <h2 className="text-3xl font-black text-black uppercase leading-tight tracking-tight mb-4">
            AMBIL TIKETMU SEKARANG!
          </h2>

          <p className="text-sm font-bold text-black/80 leading-relaxed mb-6">
            Jangan lewatkan kesempatan emas untuk mengakselerasi potensi dirimu.
            Amankan tiketmu sekarang untuk belajar langsung dari praktisi
            industri global dan bangun dampak nyatamu di dunia teknologi!
          </p>

          {/* Mini tags container */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="flex items-center gap-1 bg-neo-green border-2 border-black px-2.5 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
              <Cpu className="size-3.5" /> Tech Innovation
            </span>
            <span className="flex items-center gap-1 bg-neo-blue text-white border-2 border-black px-2.5 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
              <Shield className="size-3.5 text-white" /> Personal Growth
            </span>
            <span className="flex items-center gap-1 bg-neo-orange border-2 border-black px-2.5 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
              <Terminal className="size-3.5" /> Build Impact
            </span>
          </div>

          <div className="border-t-2 border-black border-dashed pt-4 flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-black/60">
              STATUS:
            </span>
            <span className="font-mono text-xs font-black text-neo-pink uppercase bg-black text-white px-2 py-0.5 border border-black">
              Pendaftaran Dibuka
            </span>
          </div>
        </motion.div>

        {/* Floating background shapes */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 bg-neo-yellow border-4 border-black rotate-12" />
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-neo-blue border-4 border-black" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-neo-green border-4 border-black -rotate-12" />
        </div>

        {/* Floating animated sparkles icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="absolute top-1/6 right-1/4 z-20 pointer-events-none"
        >
          <Sparkles className="size-10 text-neo-yellow fill-neo-yellow stroke-black stroke-[2]" />
        </motion.div>

        {/* Floating animated code icon */}
        <motion.div
          animate={{
            x: [0, 8, 0],
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/6 left-1/4 z-20 pointer-events-none"
        >
          <Code2 className="size-12 text-neo-green stroke-black stroke-[2.5]" />
        </motion.div>
      </div>
    </div>
  );
}
