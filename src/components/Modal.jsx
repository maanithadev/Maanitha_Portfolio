import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { useLenis } from "../lib/LenisContext";
import { FiX } from "react-icons/fi";

export default function Modal({ isOpen, onClose, children }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, lenis, onClose]);

  useGSAP(() => {
    if (!isOpen) return;
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", delay: 0.05 }
    );
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative glass w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-8 md:p-10 bg-bg-soft"
      >
        <button
          onClick={onClose}
          data-cursor-hover
          aria-label="Close"
          className="absolute top-5 right-5 text-ink-muted hover:text-cyan transition-colors"
        >
          <FiX size={22} />
        </button>
        {children}
      </div>
    </div>
  );
}