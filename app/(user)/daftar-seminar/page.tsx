"use client";

import { Decoration } from "@/components/daftar-seminar/decoration";
import { RegistForm } from "@/components/daftar-seminar/regist-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DaftarSeminar() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 neo-card bg-white z-1">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex flex-row gap-2 items-center justify-center">
              <ArrowLeft className="border-4 border-black w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_0px_#000] rotate-[5deg] bg-neo-blue" />
              <span className="block bg-neo-pink border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[-1deg] mb-3">
                SEMTIK
              </span>
              <span className="block bg-neo-yellow border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[1deg] mb-3">
                2026
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center neo-card-interactive">
          <div className="w-full max-w-xs">
            <RegistForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-neo-yellow border-l-4 border-black overflow-hidden p-12 select-none">
        <Decoration />
      </div>
    </div>
  );
}
