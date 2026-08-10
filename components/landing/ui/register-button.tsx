import Link from 'next/link';

export function RegisterButton() {
  return (
    <div className='hidden md:block'>
      <Link href='/daftar-seminar' className='neo-btn-sm bg-neo-yellow text-sm'>
        Daftar Sekarang
      </Link>
    </div>
  );
}
