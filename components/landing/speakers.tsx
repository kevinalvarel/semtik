"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
// Custom SVG icons to bypass lucide-react brand icon limitations

interface Speaker {
  name: string;
  position: string;
  company: string;
  expertise: string;
  image: string;
  color: string;
  fallback: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const speakers: Speaker[] = [
  {
    name: "Ali Reza Bahtiar",
    position: "Content Creator",
    company: "UNIVERSITAS GUNADARMA",
    expertise: "Influencer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    color: "bg-[#55E6A5]",
    fallback: "AR",
    socials: {
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Ariq Surya Nugraha",
    position: "Founder & CEO",
    company: "Petruck.ID",
    expertise: "Entrepreneurship",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    color: "bg-[#FF8A3D]",
    fallback: "FS",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
];

export function Speakers() {
  return (
    <section
      id="pembicara"
      className="relative overflow-hidden border-b-4 border-black bg-white py-16 lg:py-24 select-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-5 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="w-fit border-2 border-black bg-[#5B8CFF] px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] mb-4 inline-block">
            EXPERT PANELS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-black tracking-tight leading-none mt-2">
            PEMBICARA UTAMA
          </h2>
          <p className="mt-4 text-base sm:text-lg font-bold text-black border-2 border-black bg-[#55E6A5] p-3 inline-block shadow-[3px_3px_0px_0px_#000]">
            Dengarkan wawasan mendalam dari para pakar industri dan influencer.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
          {speakers.map((speaker, idx) => (
            <Card
              key={idx}
              className="border-4 border-black rounded-none bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Speaker Avatar container */}
                <div className="relative flex  justify-center mb-6">
                  <Avatar className="relative z-10 size-24 rounded-none border-4 border-black bg-white">
                    <AvatarImage
                      src={speaker.image}
                      alt={speaker.name}
                      className="rounded-none"
                    />
                    <AvatarFallback className="rounded-none font-mono font-black text-xl text-black">
                      {speaker.fallback}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="text-center">
                  {/* Expertise Badge */}
                  <Badge className="border-2 z-1 border-black rounded-none px-2 py-0.5 font-mono text-[10px] font-bold text-black uppercase shadow-[1.5px_1.5px_0px_0px_#000] bg-white pointer-events-none mb-3">
                    {speaker.expertise}
                  </Badge>
                  {/* Name */}
                  <h3 className="text-xl font-black text-black leading-tight mt-1 uppercase">
                    {speaker.name}
                  </h3>

                  {/* Position */}
                  <p className="mt-2 text-xs font-bold text-black/85 leading-snug">
                    {speaker.position}
                  </p>

                  {/* Company */}
                  <p className="mt-0.5 text-xs font-mono font-black text-black uppercase bg-muted py-1 border-y border-black border-dashed">
                    {speaker.company}
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-6 pt-4 border-t-2 border-black border-dashed">
                {speaker.socials.twitter && (
                  <a
                    href={speaker.socials.twitter}
                    className="border-2 border-black bg-white p-1.5 hover:-translate-y-0.5 hover:bg-[#FFE44D] active:translate-y-0 transition-all shadow-[1.5px_1.5px_0px_0px_#000]"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="size-4 text-black" />
                  </a>
                )}
                {speaker.socials.linkedin && (
                  <a
                    href={speaker.socials.linkedin}
                    className="border-2 border-black bg-white p-1.5 hover:-translate-y-0.5 hover:bg-[#5B8CFF] active:translate-y-0 transition-all shadow-[1.5px_1.5px_0px_0px_#000]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="size-4 text-black" />
                  </a>
                )}
                {speaker.socials.github && (
                  <a
                    href={speaker.socials.github}
                    className="border-2 border-black bg-white p-1.5 hover:-translate-y-0.5 hover:bg-[#55E6A5] active:translate-y-0 transition-all shadow-[1.5px_1.5px_0px_0px_#000]"
                    aria-label="GitHub"
                  >
                    <FaGithub className="size-4 text-black" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
