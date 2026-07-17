"use client";

import * as React from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
    const targetDate = new Date("2026-12-20T08:00:00+07:00"); // 24 October 2026, 08:00 AM WIB

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format helper to pad numbers with leading zeros (e.g. 05)
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const items = [
    { label: "Hari", value: timeLeft.days, bgColor: "bg-neo-yellow" },
    { label: "Jam", value: timeLeft.hours, bgColor: "bg-neo-pink" },
    { label: "Menit", value: timeLeft.minutes, bgColor: "bg-neo-green" },
    { label: "Detik", value: timeLeft.seconds, bgColor: "bg-neo-orange" },
  ];

  return (
    <section className="relative overflow-hidden border-b-4 border-black bg-neo-blue py-16 select-none">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-black tracking-tight mb-4">
          Menuju Hari Seminar
        </h2>
        <p className="mx-auto max-w-xl text-sm sm:text-base font-bold text-black uppercase tracking-wide bg-white border-2 border-black py-1 px-4 inline-block mb-10 shadow-[2px_2px_0px_0px_#000]">
          DESEMBER 2026 • MULAI 08:00 WIB
        </p>

        {/* Timer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-6 border-4 border-black ${item.bgColor} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
            >
              {/* Mono font ensures numbers don't wiggle */}
              <span className="font-mono text-5xl sm:text-7xl font-black text-black tracking-tighter leading-none select-all">
                {isMounted ? formatNumber(item.value) : "00"}
              </span>
              <span className="mt-3 font-mono text-xs sm:text-sm font-black uppercase text-black bg-white px-2 py-0.5 border-2 border-black">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
