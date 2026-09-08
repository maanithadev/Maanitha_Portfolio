import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { certificates } from "../data/portfolioData";
import { FiAward, FiExternalLink } from "react-icons/fi";

export default function Certificates() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".cert-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="certificates" ref={sectionRef} className="relative py-32 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <span className="text-sm text-cyan font-body tracking-[0.3em] uppercase">
          04 - Credentials
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-16">
          Certificates
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="cert-card glass rounded-2xl p-6 flex flex-col justify-between hover:border-cyan/50 transition-colors group"
            >
              <FiAward className="text-cyan" size={24} />
              <div className="mt-6">
                <h3 className="font-display text-lg font-semibold group-hover:text-gradient transition-all">
                  {cert.title}
                </h3>
                <p className="text-ink-muted text-sm mt-1">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <span className="flex items-center gap-2 text-xs text-ink-muted mt-6 group-hover:text-cyan transition-colors">
                View credential <FiExternalLink size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}