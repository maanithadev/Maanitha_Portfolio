import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" }); // Lenis intercepts this

  return (
    <footer className="relative px-6 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-ink-muted text-sm font-body">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React & GSAP.
        </p>

        <div className="flex items-center gap-5 text-ink-muted">
          <a href={personalInfo.socials.github} data-cursor-hover target="_blank" rel="noreferrer">
            <FiGithub size={18} />
          </a>
          <a href={personalInfo.socials.linkedin} data-cursor-hover target="_blank" rel="noreferrer">
            <FiLinkedin size={18} />
          </a>
          <a href={personalInfo.socials.email} data-cursor-hover>
            <FiMail size={18} />
          </a>
        </div>

        <button
          onClick={scrollTop}
          data-cursor-hover
          className="flex items-center gap-2 text-sm text-ink-muted hover:text-cyan transition-colors"
        >
          Back to top <FiArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}