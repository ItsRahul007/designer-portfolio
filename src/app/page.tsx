"use client";

import AboutSection from "@/components/AboutSection";
import AdvaticeSection from "@/components/AdvaticeSection";
import FirstSection from "@/components/FirstSection";
import Header from "@/components/Header";
import PortfolioSection from "@/components/PortfolioSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  return (
    <main className="font-formular max-w-[1540px] mx-auto text-[#111235]">
      <Header />
      <FirstSection />
      <AboutSection />
      <AdvaticeSection />
      <PortfolioSection />
      <Testimonials />

      <section className="h-[650px] w-full bg-firstSectionBg">hi hello</section>
      {/* <section className="h-[650px] w-full bg-firstSectionBg">hi hello</section> */}
      {/* <section className="h-[650px] w-full bg-firstSectionBg">hi hello</section> */}
    </main>
  );
}
