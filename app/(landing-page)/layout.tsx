import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
