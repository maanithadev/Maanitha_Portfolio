import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { projects } from "../data/portfolioData";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Modal from "./Modal";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  const sectionRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useGSAP(
    () => {
      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    },
    { scope: sectionRef }
  );

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(card, {
      rotateX: -(y / rect.height) * 8,
      rotateY: (x / rect.width) * 8,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const handleLeave = (e) => {
    gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="text-sm text-cyan font-body tracking-[0.3em] uppercase">03 - Work</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-16">
          Selected projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              onClick={() => setSelected(project)}
              data-cursor-hover
              className="project-card glass rounded-2xl p-8 group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl text-white/10">{project.id}</span>
                <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} data-cursor-hover target="_blank" rel="noreferrer" className="text-ink-muted hover:text-cyan transition-colors">
                    <FiGithub size={18} />
                  </a>
                  <a href={project.live} data-cursor-hover target="_blank" rel="noreferrer" className="text-ink-muted hover:text-cyan transition-colors">
                    <FiArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-2xl font-semibold mt-6 group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className="text-ink-muted mt-3 font-body">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 rounded-full border border-white/10 text-ink-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && <ProjectDetails project={selected} />}
      </Modal>
    </section>
  );
}