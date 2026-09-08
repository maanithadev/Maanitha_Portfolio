import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { personalInfo } from "../data/portfolioData";

const highlights = [
  { label: "Academic foundation", value: "HND, Pearson UK" },
  { label: "Currently pursuing", value: "BEng (Hons) in Software Engineering" },
  { label: "Project experience", value: "Academic + Enterprise-level" },
  { label: "Core strength", value: "Full-stack development" },
];

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      gsap.from(".about-stat", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-stats", start: "top 85%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.4fr_0.6fr] gap-16">
        <div>
          <span className="about-reveal text-sm text-cyan font-body tracking-[0.3em] uppercase">
            01 - About
          </span>
          <h2 className="about-reveal font-display text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            The person <br /> behind the code
          </h2>
        </div>

        <div>
          <p className="about-reveal text-ink-muted text-lg leading-relaxed font-body">
            {personalInfo.bio}
          </p>
          <p className="about-reveal text-ink-muted text-lg leading-relaxed font-body mt-6">
            I thrive in team-based environments, care about the details others skip, and I'm
            always looking for the next technology worth learning. Right now, that means
            balancing my top-up degree with real, shippable work.
          </p>

          <div className="about-stats grid grid-cols-2 gap-6 mt-12">
            {highlights.map((h) => (
              <div key={h.label} className="about-stat border-l-2 border-white/10 pl-4">
                <p className="font-display text-lg text-ink">{h.value}</p>
                <p className="text-ink-muted text-sm mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}