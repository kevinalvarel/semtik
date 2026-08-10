'use client';

import { Clock, User, ChevronRight } from 'lucide-react';

interface Session {
  time: string;
  title: string;
  speaker?: string;
  description: string;
  color: string;
  trackInfo?: string;
}

const sessions: Session[] = [
  {
    time: '08:30 - 09:35',
    title: 'REGISTRASI, PEMBUKAAN & SAMBUTAN',
    speaker: 'MC, Dekan FIK & Rektor Universitas Al-Khairiyah',
    description:
      'Registrasi peserta, pembukaan oleh MC, menyanyikan lagu Indonesia Raya dan Mars Al-Khairiyah, pembacaan kalam ilahi, serta sambutan dari Dekan Fakultas Ilmu Komputer dan Rektor Universitas Al-Khairiyah.',
    color: 'bg-[#FFE44D]',
  },
  {
    time: '09:35 - 10:30',
    title: 'TECH TALK: Penggunaan AI pada lingkup akademik',
    speaker: 'Ali Bahtiar',
    description:
      'Mengenal AI, cara melakukan prompt dengan efektif, memahami batasan dan kesalahan penggunaan AI, serta membedakan fakta dan miskonsepsi.',
    color: 'bg-neo-blue',
  },

  {
    time: '10:30 - 12:00',
    title: 'HANDS ON: Build your First App with Antigravity CLI',
    speaker: 'Muhammad Kevin Alvarel',
    description:
      'Bangun aplikasi pertama kamu, dengan Antigravity CLI dan Gemini tanpa memiliki latar belakang Teknologi',
    color: 'bg-neo-green',
  },
  {
    time: '12:20 - 12:50',
    title: 'NETWORKING',
    speaker: 'Panitia & Seluruh Peserta',
    description:
      'Sesi foto bersama, pembacaan doa penutup, serta pengisian presensi sebagai penutup rangkaian acara seminar.',
    color: 'bg-neo-yellow',
  },
];

export function Schedule() {
  return (
    <section
      id='agenda'
      className='relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-24 select-none'
    >
      <div className='absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none' />

      <div className='relative mx-auto max-w-4xl px-4 sm:px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='w-fit border-2 border-black bg-[#FF8A3D] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] mb-4 inline-block'>
            TIME TABLE
          </span>
          <h2 className='text-4xl sm:text-5xl font-black uppercase text-black tracking-tight leading-none mt-2'>
            AGENDA ACARA
          </h2>
          <p className='mt-4 text-sm sm:text-base font-bold text-black border-2 border-black bg-[#FFE44D] p-3 inline-block shadow-[3px_3px_0px_0px_#000]'>
            Minggu, 16 Desember 2026. Jadwal dirancang agar padat wawasan dan
            interaktif.
          </p>
        </div>

        {/* Timeline Container */}
        <div className='relative border-l-4 border-black ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12 pb-4'>
          {sessions.map((session, idx) => (
            <div key={idx} className='relative group'>
              {/* Timeline dot/badge with absolute positioning */}
              <div className='absolute -left-[35px] sm:-left-[171px] top-1.5 flex items-center justify-center'>
                {/* Time Indicator for Desktop */}
                <div className='hidden sm:flex border-2 border-black bg-white py-1 px-2.5 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] text-black w-32 justify-center mr-6'>
                  {session.time.split(' - ')[0]}
                </div>
                {/* Bullet circle */}
                <div className='size-6 border-4 border-black bg-black rounded-none group-hover:bg-[#FF6B9D] transition-colors duration-150' />
              </div>

              {/* Session Card */}
              <div
                className={`neo-card-interactive ${session.color} p-6 sm:p-8 cursor-default`}
              >
                {/* Time Badge (Mobile-only indicator) */}
                <div className='sm:hidden flex items-center gap-1.5 border-2 border-black bg-white px-2.5 py-0.5 text-xs font-mono font-bold uppercase text-black shadow-[1.5px_1.5px_0px_0px_#000] w-fit mb-3'>
                  <Clock className='size-3.5' />
                  {session.time}
                </div>

                {/* Desktop subtitle for time range */}
                <div className='hidden sm:flex items-center gap-1.5 font-mono text-xs font-bold text-black/80 mb-2 uppercase'>
                  <Clock className='size-3.5' />
                  {session.time}
                </div>

                {/* Title */}
                <h3 className='text-xl sm:text-2xl font-black text-black leading-tight uppercase'>
                  {session.title}
                </h3>

                {/* Speaker */}
                {session.speaker && (
                  <div className='mt-3 flex items-center gap-2 font-bold text-sm text-black border-2 border-black bg-white/70 px-3 py-1 w-fit shadow-[1.5px_1.5px_0px_0px_#000]'>
                    <User className='size-4' />
                    <span>{session.speaker}</span>
                  </div>
                )}

                {/* Description */}
                <p className='mt-4 text-sm sm:text-base font-bold text-black/90 leading-relaxed'>
                  {session.description}
                </p>

                {/* Track Info (for workshop) */}
                {session.trackInfo && (
                  <div className='mt-4 border-2 border-black bg-white p-3 shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-bold text-black flex flex-col gap-1'>
                    <span className='text-[#FF8A3D]'>TRACK PILIHAN:</span>
                    <span className='flex items-center gap-1'>
                      <ChevronRight className='size-4 shrink-0' />
                      {session.trackInfo.split(' | ')[0]}
                    </span>
                    <span className='flex items-center gap-1'>
                      <ChevronRight className='size-4 shrink-0' />
                      {session.trackInfo.split(' | ')[1]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
