'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { RegisterButton } from './ui/register-button';
import { NavbarLogo } from './ui/navbar-logo';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Tentang', href: 'tentang' },
  { label: 'Pembicara', href: 'pembicara' },
  { label: 'Agenda', href: 'agenda' },
  { label: 'FAQ', href: 'faq' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='fixed top-0 z-50 w-full border-b-4 border-black bg-white select-none'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Branding logo */}
        <NavbarLogo />

        {/* Desktop nav items */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className='text-sm font-bold uppercase text-black hover:text-neo-blue transition-colors duration-150 relative group'
              activeClass='text-neo-blue'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {link.label}
              <span className='absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all group-hover:w-full'></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <RegisterButton />

        {/* Mobile menu trigger */}
        <div className='md:hidden'>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant='outline'
                  size='icon'
                  className='border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_#000] hover:bg-muted active:translate-y-px'
                  aria-label='Menu'
                />
              }
            >
              <Menu className='size-5' />
            </SheetTrigger>
            <SheetContent
              side='right'
              className='border-l-4 border-black bg-white p-6 w-[280px]'
            >
              <SheetHeader className='border-b-2 border-black pb-4 mb-6'>
                <SheetTitle className='text-left font-black tracking-tight text-xl uppercase'>
                  SEMTIK 2026
                </SheetTitle>
              </SheetHeader>
              <div className='flex flex-col gap-6'>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-lg font-black uppercase text-black hover:text-neo-pink transition-colors py-2 border-b-2 border-black border-dashed'
                  >
                    {link.label}
                  </a>
                ))}
                <RegisterButton />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
