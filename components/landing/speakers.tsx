"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { Sparkles, Terminal, Flame, Code2 } from "lucide-react";
import { Crosshair } from "../ui/crosshair";

interface Speaker {
  id: string;
  serial: string;
  name: string;
  position: string;
  company: string;
  track: string;
  trackIcon: "flame" | "terminal";
  topic: string;
  tags: string[];
  image: string;
  headerColor: string; // e.g. bg-neo-yellow, bg-neo-blue
  badgeColor: string; // e.g. bg-neo-green, bg-neo-orange
  photoBg: string; // Light pastel container tint
  socials: {
    linkedin?: string;
    github?: string;
    tiktok?: string;
  };
}

const speakers: Speaker[] = [
  {
    id: "ali-reza",
    serial: "SN-2026-ALZ",
    name: "Ali Reza Bahtiar",
    position: "Content Creator",
    company: "TIKTOK",
    track: "CREATIVE & DIGITAL MEDIA",
    trackIcon: "flame",
    topic: "Strategi Algoritma & Monetisasi Konten di Era Digital",
    tags: ["#ContentCreation", "#PersonalBranding", "#TikTokGrowth"],
    image: "/images/ali.webp",
    headerColor: "bg-neo-yellow",
    badgeColor: "bg-neo-green",
    photoBg: "bg-[#ECFDF5]",
    socials: {
      linkedin: "https://www.linkedin.com/in/ali-reza-bahtiar/",
      tiktok: "https://www.tiktok.com/@alzabaarrr",
    },
  },
  {
    id: "kevin-alvarel",
    serial: "SN-2026-KVA",
    name: "Muhammad Kevin Alvarel",
    position: "Frontend Software Engineer",
    company: "Flyrank AI",
    track: "SOFTWARE & AI DEV",
    trackIcon: "terminal",
    topic: "Membangun Aplikasi Pertama Kamu dengan Agent Harness",
    tags: ["#FullstackDev", "#AISystems", "#ModernTechStack"],
    image: "/images/kevin.webp",
    headerColor: "bg-neo-blue",
    badgeColor: "bg-neo-orange",
    photoBg: "bg-[#FFF7ED]",
    socials: {
      linkedin: "https://www.linkedin.com/in/muhammadkevinalvarel/",
      github: "https://github.com/kevinalvarel",
    },
  },
];

export function Speakers() {
  return (
    <section
      id="pembicara"
      className="relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-24 select-none"
    >
      {/* Background Retro Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-black bg-neo-blue px-4 py-1.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000] mb-4">
            <span className="size-2 rounded-full bg-neo-yellow border border-black animate-pulse" />
            OFFICIAL LINEUP // 2026
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-black tracking-tight leading-none mt-2">
            PEMBICARA UTAMA
          </h2>
          <div className="mt-4 inline-block border-3 border-black bg-neo-green px-4 py-2 shadow-[4px_4px_0px_0px_#000] rotate-[-0.5deg]">
            <p className="text-sm sm:text-base font-bold text-black">
              Dengarkan wawasan mendalam & pengalaman nyata dari para praktisi
              industri.
            </p>
          </div>
        </div>

        {/* Speakers Grid - Light Mode Neo-Brutalist Pass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {speakers.map((speaker) => {
            const isCreator = speaker.id === "ali-reza";

            return (
              <article
                key={speaker.id}
                className="group relative flex flex-col justify-between border-4 border-black bg-white text-black p-5 sm:p-7 shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-x-1.5 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Corner registration crosshairs for blueprint / neobrutalist pass look */}
                <Crosshair />

                <div className="relative z-10">
                  {/* Lanyard Hole Cutout - VIP Pass Style */}
                  <div className="w-14 h-2.5 mx-auto rounded-full bg-zinc-100 border-2 border-black mb-5 flex items-center justify-center shadow-inner">
                    <div className="w-7 h-1 rounded-full bg-zinc-300" />
                  </div>

                  {/* Header Bar: Track Badge & Pass Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div
                      className={`inline-flex items-center gap-1.5 border-2 border-black px-2.5 py-1 text-[11px] font-mono font-bold uppercase text-black shadow-[2px_2px_0px_0px_#000] ${speaker.headerColor}`}
                    >
                      {speaker.trackIcon === "flame" ? (
                        <Flame className="size-3.5 fill-black stroke-black" />
                      ) : (
                        <Terminal className="size-3.5 stroke-[2.5]" />
                      )}
                      <span>{speaker.track}</span>
                    </div>
                  </div>

                  {/* Portrait Container with Frame */}
                  <div
                    className={`relative w-full aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] overflow-hidden border-4 border-black ${speaker.photoBg} shadow-[4px_4px_0px_0px_#000]`}
                  >
                    {/* Speaker Image */}
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      priority
                    />

                    {/* Inner Corner Pass Stamp */}
                    <div className="absolute top-3 left-3 border-2 border-black bg-white px-2.5 py-0.5 font-mono text-[10px] font-black uppercase text-black shadow-[2px_2px_0px_0px_#000]">
                      KEYNOTE
                    </div>

                    {/* Official Event Stamp on Photo */}
                    <div className="absolute bottom-3 left-3 border-2 border-black bg-white px-2.5 py-1 font-mono text-[10px] font-black text-black shadow-[2px_2px_0px_0px_#000]">
                      SEMTIK &bull; 2026
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="space-y-3 pt-1">
                    {/* Name */}
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black group-hover:text-neo-blue transition-colors leading-tight">
                      {speaker.name}
                    </h3>

                    {/* Role & Company Blocks */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block border-2 border-black px-3 py-1 font-mono text-xs sm:text-sm font-black uppercase text-black shadow-[3px_3px_0px_0px_#000] ${speaker.badgeColor}`}
                      >
                        {speaker.position}
                      </span>
                      <span className="inline-block border-2 border-black bg-white px-2.5 py-1 font-mono text-xs font-black uppercase text-black shadow-[2px_2px_0px_0px_#000]">
                        @ {speaker.company}
                      </span>
                    </div>

                    {/* Session Topic Box */}
                    <div className="border-2 border-black bg-[#F8F9FA] p-3 shadow-[3px_3px_0px_0px_#000]">
                      <span className="block font-mono text-[10px] font-black uppercase tracking-wider text-black/70 mb-1">
                        SESI PEMBAHASAN:
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-black leading-snug">
                        &ldquo;{speaker.topic}&rdquo;
                      </p>
                    </div>

                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {speaker.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[10px] font-bold text-black border-2 border-black bg-white px-2 py-0.5 shadow-[1.5px_1.5px_0px_0px_#000]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer: Social Buttons & Authentic Pass Barcode */}
                <div className="relative z-10 mt-6 pt-5 border-t-2 border-dashed border-black flex items-center justify-between gap-3">
                  {/* Social Buttons */}
                  <div className="flex items-center gap-2">
                    {speaker.socials.linkedin && (
                      <a
                        href={speaker.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-9 border-2 border-black bg-white text-black flex items-center justify-center hover:bg-neo-blue hover:text-white shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                        aria-label={`LinkedIn profil ${speaker.name}`}
                      >
                        <FaLinkedin className="size-4" />
                      </a>
                    )}
                    {speaker.socials.github && (
                      <a
                        href={speaker.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-9 border-2 border-black bg-white text-black flex items-center justify-center hover:bg-neo-yellow hover:text-black shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                        aria-label={`GitHub profil ${speaker.name}`}
                      >
                        <FaGithub className="size-4" />
                      </a>
                    )}
                    {speaker.socials.tiktok && (
                      <a
                        href={speaker.socials.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-9 border-2 border-black bg-white text-black flex items-center justify-center hover:bg-neo-green hover:text-black shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                        aria-label={`TikTok profil ${speaker.name}`}
                      >
                        <FaTiktok className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
