"use client";

import AboutSection from "@/components/AboutSection";
import AdvaticeSection from "@/components/AdvaticeSection";
import FirstSection from "@/components/FirstSection";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-formular max-w-[1540px] mx-auto">
      <Header />
      <FirstSection />
      <AboutSection />
      <AdvaticeSection />
      <section className="h-[650px] w-full bg-firstSectionBg">hi hello</section>
    </main>
  );
}
