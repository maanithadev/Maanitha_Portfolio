import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsapConfig";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xTo = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    const grow = () => gsap.to(ring, { scale: 2.2, duration: 0.3 });
    const shrink = () => gsap.to(ring, { scale: 1, duration: 0.3 });

    const handleOver = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) grow();
    };
    const handleOut = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) shrink();
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <div className="custom-cursor hidden md:block">
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-cyan rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}