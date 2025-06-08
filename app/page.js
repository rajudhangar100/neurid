"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Footer from "@/components/footer";
import ScrollEffectSection from "@/components/ScrollEffectSection";

export default function Home() {
  const [done, setDone] = useState(false);

  return (
    <>
      <HomePage done={done} />
      {!done && <IntroAnimation onComplete={() => setDone(true)} />}
      <ScrollEffectSection/>
      <Footer/>
    </>
  );
}
