"use client";

import { Heart } from "lucide-react";

interface Sponsor {
  name: string;
  logoText: string;
  color: string;
}

const platinumSponsors: Sponsor[] = [
  { name: "SkyCompute", logoText: "SKYCOMPUTE", color: "hover:bg-[#5B8CFF]" },
  { name: "Neural.io", logoText: "NEURAL.IO", color: "hover:bg-[#55E6A5]" },
  { name: "Alpha Cloud", logoText: "ALPHA.CLOUD", color: "hover:bg-[#FFE44D]" },
];

const goldSponsors: Sponsor[] = [
  { name: "CodeNation", logoText: "{CODENATION}", color: "hover:bg-[#FF6B9D]" },
  { name: "CyberDefence", logoText: "CYBER[DEF]", color: "hover:bg-[#FF8A3D]" },
  { name: "TechSync", logoText: "TECH//SYNC", color: "hover:bg-[#5B8CFF]" },
  { name: "DecaTech", logoText: "▲ DECATECH", color: "hover:bg-[#55E6A5]" },
];

const partners: Sponsor[] = [
  { name: "Dev Community", logoText: "dev.comm", color: "hover:bg-[#FFE44D]" },
  { name: "Klub IT", logoText: "KLUB_IT", color: "hover:bg-[#FF6B9D]" },
  { name: "Media Tech", logoText: "MEDIA_TECH", color: "hover:bg-[#FF8A3D]" },
  { name: "Info Seminar", logoText: "INFO_SEM", color: "hover:bg-[#5B8CFF]" },
];

export function Sponsors() {
  return (
    <section className="relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-20 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="w-fit border-2 border-black bg-[#55E6A5] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] mb-4 inline-block">
            PARTNERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-black tracking-tight leading-none mt-2 flex items-center justify-center gap-2">
            SUPPORTED BY{" "}
            <Heart className="size-8 text-[#FF6B9D] fill-[#FF6B9D]" />
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-black/80">
            Kolaborator resmi yang mensponsori dan menyukseskan gelaran SEMTIK
            2026.
          </p>
        </div>

        {/* Platinum Tier */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-black bg-[#FFE44D] border-2 border-black px-2 py-0.5 shadow-[1.5px_1.5px_0px_0px_#000]">
              PLATINUM PARTNER
            </span>
            <div className="h-0.5 flex-1 bg-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {platinumSponsors.map((sp, idx) => (
              <div
                key={idx}
                className={`border-4 border-black bg-white p-6 text-center shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] cursor-default ${sp.color}`}
              >
                <span className="font-mono text-2xl font-black tracking-tighter text-black select-all">
                  {sp.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Tier */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-black bg-white border-2 border-black px-2 py-0.5 shadow-[1.5px_1.5px_0px_0px_#000]">
              GOLD PARTNER
            </span>
            <div className="h-0.5 flex-1 bg-black border-dashed" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {goldSponsors.map((sp, idx) => (
              <div
                key={idx}
                className={`border-2 border-black bg-white p-4 text-center shadow-[3px_3px_0px_0px_#000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] cursor-default ${sp.color}`}
              >
                <span className="font-mono text-lg font-black tracking-tight text-black select-all">
                  {sp.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Media Partners */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-black bg-white border-2 border-black px-2 py-0.5 shadow-[1.5px_1.5px_0px_0px_#000]">
              COMMUNITY & MEDIA PARTNER
            </span>
            <div className="h-0.5 flex-1 bg-black border-dashed" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((sp, idx) => (
              <div
                key={idx}
                className={`border-2 border-black bg-white p-3 text-center shadow-[2px_2px_0px_0px_#000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] cursor-default ${sp.color}`}
              >
                <span className="font-mono text-sm font-bold text-black select-all">
                  {sp.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
