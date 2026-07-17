import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Countdown } from "@/components/landing/countdown";
import { About } from "@/components/landing/about";
import { Speakers } from "@/components/landing/speakers";
import { Schedule } from "@/components/landing/schedule";
import { Sponsors } from "@/components/landing/sponsors";
import { RegistrationCTA } from "@/components/landing/cta";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FFE44D] selection:text-black antialiased">
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Live Countdown Section */}
        <Countdown />

        {/* About Section */}
        <About />

        {/* Keynote Speakers Section */}
        <Speakers />

        {/* Event Schedule Section */}
        <Schedule />

        {/* Sponsors Grid Section */}
        <Sponsors />

        {/* High-Contrast Registration CTA */}
        <RegistrationCTA />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
