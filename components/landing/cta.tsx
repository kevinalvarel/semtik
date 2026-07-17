"use client";

import { motion } from "motion/react";
import { ArrowRight, Ticket, CheckCircle2 } from "lucide-react";

const marqueeText =
  " DAFTAR SEKARANG • SEMTIK 2026 • INOVASI TEKNOLOGI • AI & CLOUD SECURITY •";

const benefits = [
  "Seminar Utama & Panel Sesi bersama Pembicara Ahli",
  "Networking Coffee Break",
  "E-Sertifikat Resmi & Seminar Kit",
];

export function RegistrationCTA() {
  const repeatedText = Array(12).fill(marqueeText).join("");

  return (
    <section
      id="register"
      className="relative overflow-hidden border-b-4 border-black bg-[#FF6B9D] py-12 select-none"
    >
      {/* Top Marquee */}
      <div className="absolute top-0 left-0 right-0 border-b-4 border-black bg-[#FFE44D] py-2 overflow-hidden flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap font-mono text-xs font-black uppercase text-black"
        >
          <span className="pr-4">{repeatedText}</span>
          <span>{repeatedText}</span>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-4 border-black bg-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Details Column */}
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black leading-none tracking-tight">
              JANGAN LEWATKAN SEMTIK 2026!
            </h2>
            <p className="mt-4 text-sm sm:text-base font-bold text-black/85 leading-relaxed">
              Investasikan dirimu untuk dampak yang lebih besar. Dapatkan akses
              penuh ke seminar utama, workshop paralel pilihan untuk mengasah
              skill, sesi networking eksklusif, serta sertifikat resmi sebagai
              bukti kesiapanmu berinovasi.
            </p>

            <ul className="mt-6 space-y-2.5">
              {benefits.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 font-bold text-xs sm:text-sm text-black"
                >
                  <CheckCircle2 className="size-5 text-[#55E6A5] fill-black stroke-[3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ticket/CTA Column */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-full border-4 border-black bg-[#55E6A5] p-5 shadow-[4px_4px_0px_0px_#000] rotate-[1.5deg] text-center mb-6">
              <div className="flex justify-center mb-2">
                <Ticket className="size-8 text-black" />
              </div>
              <p className="font-mono text-xs font-black text-black uppercase tracking-wider">
                TICKET
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-1">
                <span className="text-lg sm:text-xl font-bold text-black/60 line-through">
                  Rp 20.000
                </span>
                <span className="text-3xl sm:text-4xl font-black text-neo-pink uppercase tracking-tight ">
                  GRATIS
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                alert(
                  "Form pendaftaran akan segera dibuka! Terima kasih atas ketertarikan Anda.",
                )
              }
              className="w-full neo-btn bg-[#FFE44D] text-base group gap-2"
            >
              Daftar Sekarang
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Marquee (Reverse Scroll) */}
      <div className="absolute bottom-0 left-0 right-0 border-t-4 border-black bg-[#55E6A5] py-2 overflow-hidden flex">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap font-mono text-xs font-black uppercase text-black"
        >
          <span className="pr-4">{repeatedText}</span>
          <span>{repeatedText}</span>
        </motion.div>
      </div>
    </section>
  );
}
