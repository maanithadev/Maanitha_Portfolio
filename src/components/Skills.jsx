import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      skillGroups.forEach((_, i) => {
        gsap.from(`.skill-group-${i} .skill-pill`, {
          y: 20,
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: `.skill-group-${i}`, start: "top 85%" },
        });

        gsap.from(`.skill-group-${i} .skill-label`, {
          x: -20,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: { trigger: `.skill-group-${i}`, start: "top 85%" },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <span className="text-sm text-cyan font-body tracking-[0.3em] uppercase">
          02 - Skills
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-16">
          Skills I reach for
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <div
              key={group.id}
              className={`skill-group-${i} grid md:grid-cols-[200px_1fr] gap-6 items-start border-b border-white/5 pb-10`}
            >
              <p className="skill-label font-display text-lg text-ink-muted">{group.label}</p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    data-cursor-hover
                    className="skill-pill glass px-5 py-2.5 rounded-full text-sm font-body hover:border-cyan hover:text-cyan transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}