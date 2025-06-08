"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function IntroAnimation({ onComplete }) {
  const containerRef = useRef();
  const barsRef = useRef([]);
  const logoRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(logoRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.8,
    })
      .to(
        barsRef.current,
        {
          y: "-100%",
          duration: 1.2,
          stagger: 0.2,
        },
        "-=0.3"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=1"
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        onComplete: onComplete,
      })

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen z-50 bg-black overflow-hidden"
    >
      {/* Background Bars */}
      <div className="absolute top-0 left-0 w-full h-full flex gap-2 z-10 px-1">
        {[0, 1, 2, 3].map((_, i) => (
          <div
            key={i}
            ref={(el) => (barsRef.current[i] = el)}
            className="w-1/4 h-full rounded-b-[60px] bg-[#39ff14]"
          />
        ))}
      </div>

      {/* Center Logo */}
      <div
        ref={logoRef}
        className="absolute top-1/2 left-1/2 text-white text-6xl font-bold transform -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <Image src="/logo.png" alt="image" priority={1} width={400} height={400} />

      </div>
      <div
  ref={textRef}
  className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-40 text-green-400 text-5xl md:text-7xl font-bold tracking-widest opacity-0"
>
  WELCOME TO..
</div>

    </div>
  );
}
