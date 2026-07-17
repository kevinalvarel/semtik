"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Pembicara", href: "#pembicara" },
  { label: "Agenda", href: "#agenda" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b-4 border-black bg-white select-none">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Branding logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl sm:text-2xl font-black tracking-tighter text-black uppercase"
        >
          SEMTIK{" "}
          <span className="bg-neo-yellow px-2 py-0.5 border-2 border-black text-xs font-mono tracking-normal normal-case">
            2026
          </span>
        </a>

        {/* Desktop nav items */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase text-black hover:text-neo-blue transition-colors duration-150 relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="#register" className="neo-btn-sm bg-neo-yellow text-sm">
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_#000] hover:bg-muted active:translate-y-px"
                  aria-label="Menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l-4 border-black bg-white p-6 w-[280px]"
            >
              <SheetHeader className="border-b-2 border-black pb-4 mb-6">
                <SheetTitle className="text-left font-black tracking-tight text-xl uppercase">
                  SEMTIK 2026
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-black uppercase text-black hover:text-neo-pink transition-colors py-2 border-b-2 border-black border-dashed"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#register"
                  onClick={() => setIsOpen(false)}
                  className="neo-btn bg-neo-yellow text-center py-3 mt-4 text-base"
                >
                  Daftar Sekarang
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
