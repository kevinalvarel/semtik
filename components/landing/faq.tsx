"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Bagaimana cara melakukan registrasi?",
    answer:
      "Klik tombol 'Daftar Sekarang' di bagian atas atau bawah halaman ini. Isi formulir pendaftaran dengan data diri lengkap. Lalu tunggu kabar selanjutnya melalui email.",
  },
  {
    question: "Apakah peserta seminar akan mendapatkan sertifikat?",
    answer:
      "Ya, tentu saja! Seluruh peserta (baik yang menghadiri secara offline maupun online) akan mendapatkan e-sertifikat resmi yang ditandatangani oleh pemateri dan panitia penyelenggara. Peserta offline juga akan mendapatkan sertifikat cetak fisik di dalam seminar kit.",
  },
  {
    question: "Apakah seminar ini gratis atau berbayar?",
    answer: "Seminar ini gratis untuk seluruh peserta!",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-24 select-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="w-fit border-2 border-black bg-[#FF6B9D] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] mb-4 inline-block">
            HELP CENTER
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-black tracking-tight leading-none mt-2">
            PERTANYAAN UMUM
          </h2>
          <p className="mt-4 text-sm sm:text-base font-bold text-black/80">
            Temukan jawaban atas hal-hal yang sering ditanyakan mengenai
            kegiatan seminar.
          </p>
        </div>

        {/* Custom Framer Motion Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full flex flex-col gap-4"
        >
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full font-black text-left text-base sm:text-lg uppercase text-black px-5 py-4 hover:bg-gray-50 focus-visible:outline-none cursor-pointer flex items-center justify-between select-none"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="shrink-0 ml-4"
                  >
                    <ChevronDown className="size-5 text-black stroke-[3]" />
                  </motion.div>
                </button>

                {/* Accordion Content with framer-motion AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-4 font-bold text-black/90 bg-white border-t-2 border-black border-dashed rounded-none text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
