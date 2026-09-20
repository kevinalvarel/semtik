'use client';

import { useEffect, useState } from "react";
import { getTotalRegistration } from "@/servers/slot.service";

interface ProgressBarProps {
  initialTotal?: number;
  maxQuota?: number;
}

export function ProgressBar({ initialTotal = 0, maxQuota = 200 }: ProgressBarProps) {
  const [total, setTotal] = useState(initialTotal);

  useEffect(() => {
    getTotalRegistration()
      .then((count) => {
        if (typeof count === "number") {
          setTotal(count);
        }
      })
      .catch((error) => {
        console.error("Failed to load registration count:", error);
      });
  }, []);

  const percentage = Math.min(100, Math.round((total / maxQuota) * 100));

  return (
    <div className='mt-1.5'>
      <div className='h-3.5 w-full border-2 border-black bg-white overflow-hidden'>
        <div
          className='h-full bg-[#55E6A5] transition-all duration-500 ease-out'
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className='flex justify-between font-mono text-[clamp(0.55rem,0.75vw,0.65rem)] font-bold text-black mt-0.5'>
        <span>{percentage}% Terisi</span>
        <span>{total >= maxQuota ? 'Kuota Penuh' : 'Ayo Daftar!'}</span>
      </div>
    </div>
  );
}