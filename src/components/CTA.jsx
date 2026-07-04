import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { personalInfo } from "../data/portfolioData";
import ContactForm from "./ContactForm";

export default function CTA() {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".cta-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef }
  );

  const handleMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: "power2.out" });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-40 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="cta-reveal text-sm text-cyan font-body tracking-[0.3em] uppercase">
          06 — Contact
        </span>
        <h2 className="cta-reveal font-display text-4xl md:text-6xl font-semibold mt-6 leading-tight">
          Let's build something worth shipping.
        </h2>
        <p className="cta-reveal text-ink-muted mt-6 font-body text-lg">
          {personalInfo.status}. If that sounds like a fit, I'd love to hear from you.
        </p>

        <div className="cta-reveal mt-12">
          <ContactForm />
        </div>
        <a href={personalInfo.socials.email} data-cursor-hover className="cta-reveal inline-block mt-6 text-sm text-ink-muted hover:text-cyan transition-colors">
          or email me directly →
        </a>
      </div>
    </section>
  );
}