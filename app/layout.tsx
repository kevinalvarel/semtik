// For adding custom fonts with other frameworks, see:
// https://tailwindcss.com/docs/font-family
import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Architects_Daughter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/providers";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});
const fontArchitects = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects",
  weight: "400",
});

export const metadata: Metadata = {
  title: "SEMTIK 2026 – Seminar Informatika Nasional",
  description:
    "Seminar Informatika 2026 (SEMTIK). Eksplorasi kemampuan kamu dan tingkatkan wawasanmu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontArchitects.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
