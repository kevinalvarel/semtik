"use client";

import { Decoration } from "@/components/daftar-seminar/decoration";
import { ArrowLeft, Check, Mail, Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SuccessPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 relative">
      <div className="relative flex flex-col gap-4 p-6 md:p-10 border-4 border-black bg-white z-1 justify-between overflow-y-auto min-h-screen">
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-5 pointer-events-none z-0" />

        <div className="relative z-10 flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex flex-row gap-2 items-center justify-center">
              <ArrowLeft className="border-4 border-black w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_0px_#000] rotate-[5deg] bg-neo-blue hover:bg-neo-blue/80 transition-colors" />
              <span className="block bg-neo-pink border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[-1deg] mb-3">
                SEMTIK
              </span>
              <span className="block bg-neo-yellow border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[1deg] mb-3">
                2026
              </span>
            </div>
          </Link>
        </div>

        {/* Success Card Area */}
        <div className="relative z-10 flex flex-1 items-center justify-center py-8">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center text-center">
              {/* Check Circle Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 6 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="relative inline-block bg-neo-green border-4 border-black p-4 w-20 h-20 shadow-[6px_6px_0px_0px_#000] mb-6"
              >
                <Check className="w-full h-full stroke-black stroke-[3.5]" />
              </motion.div>

              {/* H1 Heading */}
              <motion.h1
                id="success-heading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mb-2 leading-none"
              >
                Pendaftaran Berhasil!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-sm font-bold text-black/70 mb-6"
              >
                Selamat! Kamu telah terdaftar sebagai peserta seminar SEMTIK
                2026.
              </motion.p>

              {/* Email Notification Box */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="w-full border-4 border-black bg-neo-yellow p-5 shadow-[4px_4px_0px_0px_#000] text-left rotate-[-1deg] mb-6"
              >
                <div className="flex items-start gap-3">
                  <Mail className="size-6 shrink-0 stroke-black stroke-[2.5] mt-0.5 text-black" />
                  <div>
                    <h3 className="font-black text-sm uppercase mb-1 text-black">
                      Cek Email Kamu Secara Berkala!
                    </h3>
                    <p className="text-xs font-bold text-black/85 leading-relaxed">
                      Silakan cek email kamu secara berkala ya, untuk info lebih
                      lanjut mengenai tiket seminar, link grup koordinasi, dan
                      pembaruan penting lainnya.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Event Details Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="w-full border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000] text-left text-xs font-mono font-bold mb-8 space-y-2.5"
              >
                <div className="flex items-center gap-2 border-b-2 border-black border-dashed pb-2">
                  <Calendar className="size-4 shrink-0 stroke-black stroke-[2]" />
                  <span className="text-black/60">HARI & TANGGAL:</span>
                  <span className="ml-auto font-black text-black">
                    Rabu, 16 Desember 2026
                  </span>
                </div>
                <div className="flex items-center gap-2 border-b-2 border-black border-dashed pb-2">
                  <Clock className="size-4 shrink-0 stroke-black stroke-[2]" />
                  <span className="text-black/60">WAKTU:</span>
                  <span className="ml-auto font-black text-black">
                    08:30 - 12:50 WIB
                  </span>
                </div>
                <div className="flex items-start gap-2 pt-0.5">
                  <MapPin className="size-4 shrink-0 stroke-black stroke-[2] mt-0.5" />
                  <span className="text-black/60">LOKASI:</span>
                  <span className="ml-auto text-right font-black text-neo-blue">
                    Gedung Serba Guna Universitas Al-Khairiyah, Banten
                  </span>
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-4 w-full"
              >
                <Link
                  href="/"
                  id="btn-back-home"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "default" }),
                    "flex-1 text-center",
                  )}
                >
                  Kembali ke Beranda
                </Link>
                <Link
                  href="/daftar-seminar"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "default" }),
                    "flex-1 text-center",
                  )}
                >
                  Daftar Lagi
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="relative z-10 text-center font-mono text-[10px] font-bold text-black/40 mt-4">
          © {new Date().getFullYear()} SEMTIK. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* Right Column decoration */}
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-neo-yellow border-l-4 border-black overflow-hidden p-12 select-none">
        <Decoration />
      </div>
    </div>
  );
}
