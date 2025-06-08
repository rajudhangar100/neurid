"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Footer from "@/components/footer";

export default function Home() {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done && <IntroAnimation onComplete={() => setDone(true)} />}
      {done && <HomePage done={done} />}
      {done && <Footer />}
    </>
  );
}
