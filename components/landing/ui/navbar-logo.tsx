import Link from 'next/link';

export function NavbarLogo() {
  return (
    <>
      <Link
        href='/'
        className='flex items-center gap-2 text-xs sm:text-sm font-black tracking-tighter text-black uppercase'
      >
        <span className='block bg-neo-pink border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[-1deg]'>
          SEMTIK
        </span>
        <span className='block bg-neo-yellow border-4 border-black px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000] rotate-[1deg]'>
          2026
        </span>
      </Link>
    </>
  );
}
