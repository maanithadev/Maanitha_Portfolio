import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const [count, setCount] = useState(0);

  useGSAP(
    () => {
      const counter = { value: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
            onComplete,
          });
        },
      });

      tl.to(counter, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => setCount(Math.floor(counter.value)),
      }).to(".preloader-bar", { scaleX: 1, duration: 2, ease: "power2.inOut" }, "<");
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center"
    >
      <span className="font-display text-6xl md:text-8xl text-ink">
        {count}
        <span className="text-cyan">%</span>
      </span>
      <div className="w-48 h-[2px] bg-white/10 mt-6 overflow-hidden">
        <div className="preloader-bar h-full w-full bg-gradient-to-r from-violet to-cyan origin-left scale-x-0" />
      </div>
    </div>
  );
}