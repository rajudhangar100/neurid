"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "neon-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const scaleUp = () => gsap.to(cursor, { scale: 2, duration: 0.2 });
    const scaleDown = () => gsap.to(cursor, { scale: 1, duration: 0.2 });

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("a, button, .hover-target");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", scaleUp);
      el.addEventListener("mouseleave", scaleDown);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", scaleUp);
        el.removeEventListener("mouseleave", scaleDown);
      });
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return null; // The actual cursor is DOM-injected, nothing to render here
}
