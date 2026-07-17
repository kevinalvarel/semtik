"use client";

import { Lightbulb, Users, Cpu, ArrowUpRight } from "lucide-react";

export function About() {
  const features = [
    {
      title: "Expert Speakers",
      description:
        "Akselerasi potensimu dengan belajar langsung dari praktisi industri dan akademisi terkemuka yang siap memandu pertumbuhan kariermu di dunia tech.",
      color: "bg-[#5B8CFF]",
      icon: Lightbulb,
    },
    {
      title: "Networking Session",
      description:
        "Perluas koneksi dan kolaborasi dengan ratusan sesama antusias teknologi untuk membangun dampak nyata yang lebih besar bagi masyarakat.",
      color: "bg-[#55E6A5]",
      icon: Users,
    },
    {
      title: "Latest Tech Trends",
      description:
        "Kuasai inovasi teknologi mutakhir mulai dari AI hingga Software Engineering, dan temukan cara tepat untuk mengimplementasikannya secara nyata.",
      color: "bg-[#FF8A3D]",
      icon: Cpu,
    },
  ];

  return (
    <section
      id="tentang"
      className="relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-24 select-none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Summary */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Tag */}
            <span className="w-fit border-2 border-black bg-[#FF6B9D] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] mb-6">
              SEKILAS SEMINAR
            </span>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-black tracking-tight leading-none">
              TENTANG SEMTIK
            </h2>

            {/* Description */}
            <div className="mt-8 space-y-6 text-base sm:text-lg font-medium text-black leading-relaxed">
              <p>
                <strong>SEMTIK (Seminar Informatika) 2026</strong> hadir kembali
                sebagai wadah kolaborasi tahunan yang menjembatani pemikir
                akademis, peneliti, dan praktisi industri teknologi untuk
                mendorong inovasi digital yang berdampak luas.
              </p>
              <p className="border-l-4 border-black pl-4 bg-gray-50 py-2 pr-2">
                Tahun ini, SEMTIK mengusung semangat untuk menyelaraskan
                pertumbuhan kapasitas diri dengan pesatnya inovasi teknologi
                mulai dari pemanfaatan AI yang cerdas hingga pengembangan
                infrastruktur digital yang aman dan solutif.
              </p>
              <p>
                Melalui rangkaian seminar utama dan diskusi interaktif, acara
                ini dirancang tidak hanya untuk membagikan wawasan global,
                tetapi juga menginspirasi transformasi karier serta riset Anda
                demi menciptakan kontribusi nyata bagi masa depan.
              </p>
            </div>

            {/* Bottom mini-banner */}
            <div className="mt-8 border-4 border-black bg-[#FFE44D] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
              <div className="absolute top-2 right-2 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-5" />
              </div>
              <p className="font-mono text-xs font-bold text-black uppercase">
                Tema SEMTIK 2026
              </p>
              <p className="text-base sm:text-lg font-black text-black mt-1">
                &ldquo;Build Your Impact: Aligning Personal Growth with Tech
                Innovation&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`neo-card-interactive ${feat.color} flex flex-col sm:flex-row items-start gap-4 p-6 sm:p-8 cursor-default`}
                >
                  {/* Icon Block */}
                  <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_#000] shrink-0">
                    <Icon className="size-6 text-black" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-bold text-black/90 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
