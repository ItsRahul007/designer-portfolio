"use client";

import AboutSection from "@/components/AboutSection";
import AdvaticeSection from "@/components/AdvaticeSection";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import FirstSection from "@/components/FirstSection";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import PortfolioSection from "@/components/PortfolioSection";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function Home() {
  return (
    <main className="font-formular max-w-[1540px] mx-auto text-[#111235]">
      <Header />
      <FirstSection />
      <AboutSection />
      <AdvaticeSection />
      <PortfolioSection />
      <Testimonials />
      <Contact />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
