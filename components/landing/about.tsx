'use client';

import { Lightbulb, Users, Cpu, ArrowUpRight } from 'lucide-react';

export function About() {
  const features = [
    {
      title: 'Inspiring Speakers',
      description:
        'Dapatkan insight, pengalaman, dan perspektif baru langsung dari para pembicara yang berbagi perjalanan serta pengalaman mereka di dunia teknologi.',
      color: 'bg-[#5B8CFF]',
      icon: Lightbulb,
    },
    {
      title: 'Networking Session',
      description:
        'Perluas koneksi dan temukan peluang kolaborasi bersama ratusan peserta yang memiliki ketertarikan dan semangat yang sama di bidang teknologi.',
      color: 'bg-[#55E6A5]',
      icon: Users,
    },
    {
      title: 'Latest Tech Trends',
      description:
        'Kenali perkembangan teknologi terbaru, mulai dari AI hingga Software Engineering, serta bagaimana inovasi tersebut diterapkan dalam dunia nyata.',
      color: 'bg-[#FF8A3D]',
      icon: Cpu,
    },
  ];

  return (
    <section
      id='tentang'
      className='relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-24 select-none'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start'>
          {/* Left Column: Summary */}
          <div className='lg:col-span-5 flex flex-col justify-center'>
            {/* Tag */}
            <span className='w-fit border-2 border-black bg-[#FF6B9D] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] mb-6'>
              SEKILAS SEMINAR
            </span>

            {/* Title */}
            <h2 className='text-4xl sm:text-5xl font-black uppercase text-black tracking-tight leading-none'>
              TENTANG SEMTIK
            </h2>

            {/* Description */}
            <div className='mt-8 space-y-6 text-base sm:text-lg font-medium text-black leading-relaxed'>
              <p>
                <strong>
                  SEMTIK (Seminar Nasional Teknik Informatika) 2026
                </strong>{' '}
                kembali hadir sebagai ruang untuk berbagi, berdiskusi, dan
                terhubung dengan berbagai perspektif di dunia teknologi.
                Menghadirkan pembicara dengan pengalaman di bidangnya, SEMTIK
                menjadi tempat untuk mendapatkan insight langsung dari
                perjalanan dan pengalaman mereka di dunia teknologi.
              </p>

              <p className='border-l-4 border-black pl-4 bg-gray-50 py-2 pr-2'>
                SEMTIK mengangkat berbagai topik seputar perkembangan teknologi,
                mulai dari Artificial Intelligence, Software Engineering, hingga
                inovasi digital yang terus berkembang. Bukan sekadar membahas
                teknologi, tetapi juga bagaimana kita dapat memahami dan
                mengimplementasikannya di dunia nyata.
              </p>

              <p>
                Melalui seminar dan diskusi interaktif, SEMTIK 2026 mengajak
                peserta untuk memperluas wawasan, bertukar pengalaman, dan
                membangun koneksi dengan sesama antusias teknologi. Karena
                terkadang, satu insight dari sebuah cerita, satu diskusi, atau
                satu koneksi dapat menjadi langkah baru dalam perjalanan kita di
                dunia teknologi.
              </p>
            </div>

            {/* Bottom mini-banner */}
            <div className='mt-8 border-4 border-black bg-[#FFE44D] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group'>
              <div className='absolute top-2 right-2 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
                <ArrowUpRight className='size-5' />
              </div>
              <p className='font-mono text-xs font-bold text-black uppercase'>
                Tema SEMTIK 2026
              </p>
              <p className='text-base sm:text-lg font-black text-black mt-1'>
                &ldquo;Elevating Personal Skills Through AI Innovation&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className='lg:col-span-7 flex flex-col gap-6'>
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`neo-card-interactive ${feat.color} flex flex-col sm:flex-row items-start gap-4 p-6 sm:p-8 cursor-default`}
                >
                  {/* Icon Block */}
                  <div className='bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_#000] shrink-0'>
                    <Icon className='size-6 text-black' />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className='text-xl sm:text-2xl font-black text-black uppercase tracking-tight'>
                      {feat.title}
                    </h3>
                    <p className='mt-2 text-sm sm:text-base font-bold text-black/90 leading-relaxed'>
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
