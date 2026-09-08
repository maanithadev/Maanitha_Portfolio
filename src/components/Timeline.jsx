import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { education } from "../data/portfolioData";

export default function Timeline() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".timeline-line", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 0.5,
        },
      });

      gsap.from(".timeline-item", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 px-6 bg-bg-soft">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm text-cyan font-body tracking-[0.3em] uppercase">
          05 - Journey
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-20">
          Education & growth
        </h2>

        <div className="relative pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10">
            <div className="timeline-line absolute inset-0 bg-gradient-to-b from-violet to-cyan origin-top scale-y-0" />
          </div>

          <div className="space-y-16">
            {education.map((item) => (
              <div key={item.id} className="timeline-item relative">
                <div className="absolute -left-[42px] top-1 w-3 h-3 rounded-full bg-cyan shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
                <p className="text-sm text-cyan font-body tracking-wide uppercase">{item.period}</p>
                <h3 className="font-display text-2xl font-semibold mt-2">{item.degree}</h3>
                <p className="text-ink-muted mt-1">{item.institution}</p>
                <p className="text-ink-muted mt-3 font-body max-w-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}