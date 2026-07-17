"use client"

import { Clock, User, ChevronRight } from "lucide-react"

interface Session {
  time: string
  title: string
  speaker?: string
  description: string
  color: string
  trackInfo?: string
}

const sessions: Session[] = [
  {
    time: "08:00 - 09:00",
    title: "REGISTRASI & OPENING CEREMONY",
    speaker: "MC & Welcoming Dance Panel",
    description: "Registrasi ulang peserta, sambutan resmi dari rektorat dan ketua panitia, dilanjutkan persembahan tarian pembuka.",
    color: "bg-[#FFE44D]",
  },
  {
    time: "09:00 - 10:30",
    title: "KEYNOTE SPEECH: SECURING THE AI REVOLUTION",
    speaker: "Dr. Ir. Budi Rahardjo (ITB)",
    description: "Membahas lanskap keamanan cyber nasional, kerentanan sistem kecerdasan buatan, serta strategi perlindungan privasi data.",
    color: "bg-[#5B8CFF]",
  },
  {
    time: "10:30 - 12:00",
    title: "PANEL DISCUSSION: SCALING INFRASTRUCTURE & ARCHITECTURE",
    speaker: "Amanda Cole (SkyCompute) & Farah Salsabila (DecaTech)",
    description: "Diskusi panel interaktif mengenai arsitektur cloud-native yang skalabel, tren microservices, dan keandalan sistem berskala besar.",
    color: "bg-[#FF6B9D]",
  },
  {
    time: "12:00 - 13:00",
    title: "ISHOMA & NETWORKING SESSION",
    description: "Istirahat, sholat, makan siang, dan sesi khusus networking di networking lounge bersama pembicara dan sponsor partner.",
    color: "bg-[#55E6A5]",
  },
  {
    time: "13:00 - 15:30",
    title: "PARALLEL WORKSHOP SESSION (PILIH SATU TRACK)",
    description: "Sesi praktik mendalam yang dipandu langsung oleh instruktur profesional. Laptop wajib dibawa untuk sesi ini.",
    trackInfo: "Track A: MLOps Practical Implementation | Track B: Cloud Security Compliance Audit",
    color: "bg-[#FF8A3D]",
  },
  {
    time: "15:30 - 16:00",
    title: "CLOSING CEREMONY & DOORPRIZES",
    description: "Penyerahan sertifikat pembicara, pengumuman pemenang doorprize (Smartwatch, SSD, Merchandise), dan sesi foto bersama.",
    color: "bg-[#FFE44D]",
  },
]

export function Schedule() {
  return (
    <section id="agenda" className="relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-24 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="w-fit border-2 border-black bg-[#FF8A3D] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] mb-4 inline-block">
            TIME TABLE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-black tracking-tight leading-none mt-2">
            AGENDA ACARA
          </h2>
          <p className="mt-4 text-sm sm:text-base font-bold text-black border-2 border-black bg-[#FFE44D] p-3 inline-block shadow-[3px_3px_0px_0px_#000]">
            Sabtu, 24 Oktober 2026. Jadwal dirancang agar padat wawasan dan interaktif.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-black ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12 pb-4">
          
          {sessions.map((session, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline dot/badge with absolute positioning */}
              <div className="absolute -left-[35px] sm:-left-[171px] top-1.5 flex items-center justify-center">
                {/* Time Indicator for Desktop */}
                <div className="hidden sm:flex border-2 border-black bg-white py-1 px-2.5 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] text-black w-32 justify-center mr-6">
                  {session.time.split(" - ")[0]}
                </div>
                {/* Bullet circle */}
                <div className="size-6 border-4 border-black bg-black rounded-none group-hover:bg-[#FF6B9D] transition-colors duration-150" />
              </div>

              {/* Session Card */}
              <div className={`neo-card-interactive ${session.color} p-6 sm:p-8 cursor-default`}>
                
                {/* Time Badge (Mobile-only indicator) */}
                <div className="sm:hidden flex items-center gap-1.5 border-2 border-black bg-white px-2.5 py-0.5 text-xs font-mono font-bold uppercase text-black shadow-[1.5px_1.5px_0px_0px_#000] w-fit mb-3">
                  <Clock className="size-3.5" />
                  {session.time}
                </div>

                {/* Desktop subtitle for time range */}
                <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs font-bold text-black/80 mb-2 uppercase">
                  <Clock className="size-3.5" />
                  {session.time}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-black leading-tight uppercase">
                  {session.title}
                </h3>

                {/* Speaker */}
                {session.speaker && (
                  <div className="mt-3 flex items-center gap-2 font-bold text-sm text-black border-2 border-black bg-white/70 px-3 py-1 w-fit shadow-[1.5px_1.5px_0px_0px_#000]">
                    <User className="size-4" />
                    <span>{session.speaker}</span>
                  </div>
                )}

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base font-bold text-black/90 leading-relaxed">
                  {session.description}
                </p>

                {/* Track Info (for workshop) */}
                {session.trackInfo && (
                  <div className="mt-4 border-2 border-black bg-white p-3 shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-bold text-black flex flex-col gap-1">
                    <span className="text-[#FF8A3D]">TRACK PILIHAN:</span>
                    <span className="flex items-center gap-1">
                      <ChevronRight className="size-4 shrink-0" />
                      {session.trackInfo.split(" | ")[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <ChevronRight className="size-4 shrink-0" />
                      {session.trackInfo.split(" | ")[1]}
                    </span>
                  </div>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
