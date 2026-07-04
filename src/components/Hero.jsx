import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "../lib/gsapConfig";
import { personalInfo } from "../data/portfolioData";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero({ ready }) {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(
    () => {
      if (!ready) return;

      const split = new SplitText(headingRef.current, { type: "chars" });
      const tl = gsap.timeline();

      tl.from(split.chars, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
      })
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4")
        .from(".hero-social a", { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 }, "-=0.3");

      gsap.to(".blob-1", { x: 60, y: 40, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".blob-2", { x: -50, y: -30, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
    },
    { scope: containerRef, dependencies: [ready] }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6"
    >
      <div className="blob-1 absolute w-[28rem] h-[28rem] bg-violet/30 rounded-full blur-[120px] -top-20 -left-20" />
      <div className="blob-2 absolute w-[24rem] h-[24rem] bg-cyan/20 rounded-full blur-[120px] bottom-0 right-0" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <p className="hero-sub font-body text-cyan tracking-[0.3em] text-xs uppercase mb-6">
          {personalInfo.status}
        </p>

        <div className="overflow-hidden pb-2">
          <h1
            ref={headingRef}
            className="font-display font-semibold text-[13vw] md:text-[6.5vw] leading-[0.95] tracking-tight"
          >
            {personalInfo.name}
          </h1>
        </div>

        <p className="hero-sub mt-8 max-w-xl text-ink-muted text-lg font-body">
          {personalInfo.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects"
            data-cursor-hover
            className="hero-cta px-7 py-3 rounded-full bg-gradient-to-r from-violet to-cyan text-bg font-medium text-sm"
          >
            View my work
          </a>

          <a href="#contact"
            data-cursor-hover
            className="hero-cta px-7 py-3 rounded-full border border-white/15 text-sm hover:border-cyan hover:text-cyan transition-colors"
          >
            Let's talk
          </a>
        </div>

        <div className="hero-social flex gap-5 mt-14 text-ink-muted">
          <a href={personalInfo.socials.github} data-cursor-hover target="_blank" rel="noreferrer">
            <FiGithub size={20} />
          </a>
          <a href={personalInfo.socials.linkedin} data-cursor-hover target="_blank" rel="noreferrer">
            <FiLinkedin size={20} />
          </a>
          <a href={personalInfo.socials.email} data-cursor-hover>
            <FiMail size={20} />
          </a>
        </div>
      </div>


      <a href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted text-xs"
      >
        Scroll
        < FiArrowDown className="animate-bounce" />
      </a >
    </section >
  );
}