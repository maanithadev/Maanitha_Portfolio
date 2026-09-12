import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolioData";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`max-md:hidden fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "py-6 bg-transparent"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" data-cursor-hover className="font-display font-semibold text-lg">
          {personalInfo.initials}
          <span className="text-cyan">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className="relative text-ink-muted hover:text-ink transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href={personalInfo.resumeUrl}
          data-cursor-hover
          download
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 text-sm hover:border-cyan hover:text-cyan transition-colors"
        >
          Resume
        </a>
      </nav>
    </header >
  );
}