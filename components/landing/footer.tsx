"use client";

import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const socialMedias = [
  { icon: <FaTwitter />, href: "#", color: "hover:bg-neo-blue" },
  { icon: <FaInstagram />, href: "#", color: "hover:bg-neo-pink" },
  { icon: <FaYoutube />, href: "#", color: "hover:bg-neo-orange" },
  { icon: <FaGithub />, href: "#", color: "hover:bg-neo-green" },
];

const importantLinks = [
  { label: "Halaman Utama", href: "#" },
  { label: "Tentang Seminar", href: "#tentang" },
  { label: "Pembicara Utama", href: "#pembicara" },
  { label: "Agenda & Jadwal", href: "#agenda" },
  { label: "Pertanyaan Umum", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t-4 border-black bg-black text-white py-16 select-none">
      {/* Decorative top strip */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-neo-yellow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Column 1: Branding */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white uppercase w-fit"
            >
              SEMTIK
              <span className="bg-neo-yellow text-black px-2 py-0.5 border-2 border-white text-xs font-mono tracking-normal normal-case">
                2026
              </span>
            </a>
            <p className="text-sm font-bold text-gray-400 leading-relaxed">
              Seminar Informatika Nasional edisi ke-10. Wadah kolaborasi tak
              terbatas antara akademisi, peneliti, dan praktisi industri
              teknologi.
            </p>
            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-neo-green uppercase">
              <Sparkles className="size-3.5 fill-neo-green" />
              #SEMTIK2026 • SECURE & SCALE
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="font-mono text-sm font-black uppercase text-neo-yellow tracking-wider mb-4 border-b border-gray-800 pb-2">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm font-bold">
              {importantLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neo-blue transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <h3 className="font-mono text-sm font-black uppercase text-neo-pink tracking-wider border-b border-gray-800 pb-2">
              CONTACT INFO
            </h3>
            <ul className="space-y-3 text-sm font-bold text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-5 text-neo-yellow shrink-0 mt-0.5" />
                <span>
                  Fakultas Ilmu Komputer, Universitas Al-Khairiyah. Jl Raya
                  Kepuh, Citangkil, Cilegon, Banten.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#5B8CFF] shrink-0" />
                <a
                  href="mailto:info@semtik.org"
                  className="hover:text-white transition-colors select-all"
                >
                  info@semtik.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#55E6A5] shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="hover:text-white transition-colors select-all"
                >
                  +62 812-3456-7890 (CS)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="md:col-span-1">
            <h3 className="font-mono text-sm font-black uppercase text-[#55E6A5] tracking-wider mb-4 border-b border-gray-800 pb-2">
              CONNECT WITH US
            </h3>
            <p className="text-xs font-bold text-gray-400 mb-4 leading-relaxed">
              Ikuti media sosial kami untuk mendapatkan update tercepat seputar
              acara dan info webinar lainnya.
            </p>
            <div className="flex gap-3">
              {socialMedias.map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    className={`border-2 border-white bg-black p-2 hover:-translate-y-0.5 hover:text-black active:translate-y-0 transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] ${soc.color}`}
                    aria-label="Social Account"
                  >
                    {Icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono font-bold text-gray-500">
            © {new Date().getFullYear()} SEMTIK. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
