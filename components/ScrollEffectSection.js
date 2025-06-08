import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollEffectSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".line");

      // Initially dim all lines
      gsap.set(lines, { opacity: 0.3 });

      // Pin the section and highlight lines on scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * lines.length}`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const section = 1 / lines.length;
          const activeIndex = Math.floor(progress / section);
          lines.forEach((line, i) => {
            gsap.to(line, {
              opacity: i === activeIndex ? 1 : 0.3,
              duration: 0.3,
              overwrite: true,
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="text-center space-y-8">
        <h1 className="line text-4xl md:text-6xl font-bold text-neon transition-opacity duration-500">
          Line One - Welcome
        </h1>
        <h1 className="line text-4xl md:text-6xl font-bold text-neon transition-opacity duration-500">
          Line Two - Discover
        </h1>
        <h1 className="line text-4xl md:text-6xl font-bold text-neon transition-opacity duration-500">
          Line Three - Explore
        </h1>
      </div>

      <style jsx>{`
        .text-neon {
          color: #39ff14;
        }
      `}</style>
    </section>
  );
};

export default ScrollEffectSection;
