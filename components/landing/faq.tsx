"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

        {/* Accordion Component */}
        <Accordion className="w-full flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              <AccordionTrigger className="w-full font-black text-left text-base sm:text-lg uppercase text-black px-5 py-4 hover:no-underline rounded-none hover:bg-gray-50 focus-visible:ring-0 cursor-pointer flex items-center justify-between">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-5 pt-4 font-bold text-black/90 bg-white border-t-2 border-black border-dashed rounded-none text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
