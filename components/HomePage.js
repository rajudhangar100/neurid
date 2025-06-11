"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";

export default function HomePage({ done }) {
  const textRef = useRef();
  const navbarRef=useRef();

  useEffect(() => {
  if (done) {
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    // Also remove the opacity-0 class once animation starts (optional cleanup)
    textRef.current.classList.remove("opacity-0");
  }
}, [done]);


  const renderAnimatedText = () =>
    "NEURID".split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char}
      </span>
    ));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        muted
        loop
      />
      <div ref={navbarRef} className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      {/* Animated NEURID Text */}
      <div
          ref={textRef}
          className="absolute tracking-widest bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-green-400 text-4xl md:text-9xl font-extrabold  opacity-0"
        >
        {renderAnimatedText()}
      </div>
    </div>
  );
}
