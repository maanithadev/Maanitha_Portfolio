import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsapConfig";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (menuOpen) {
      gsap.to(menuRef.current, { yPercent: 0, duration: 0.6, ease: "power4.out" });
      gsap.fromTo(
        menuRef.current.querySelectorAll("a"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, delay: 0.2, duration: 0.5 }
      );
    } else {
      gsap.to(menuRef.current, { yPercent: -100, duration: 0.5, ease: "power3.in" });
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "py-6 bg-transparent"}`}
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

        <button
          data-cursor-hover
          className="md:hidden z-50 relative w-8 h-6 flex flex-col justify-between"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`h-px w-full bg-ink transition-transform ${menuOpen ? "translate-y-[11px] rotate-45" : ""}`} />
          <span className={`h-px w-full bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-full bg-ink transition-transform ${menuOpen ? "-translate-y-[11px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <div
        ref={menuRef}
        className="md:hidden fixed inset-0 bg-bg flex flex-col items-center justify-center gap-8"
        style={{ transform: "translateY(-100%)" }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-3xl"
          >
            {link.label}
          </a>
        ))
        }
      </div >
    </header >
  );
}