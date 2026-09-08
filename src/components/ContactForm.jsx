import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsapConfig";
import { supabase } from "../lib/supabaseClient";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const initialForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".form-field", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: formRef.current, start: "top 85%" },
      });
    },
    { scope: formRef }
  );

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    const { error } = await supabase.from("messages").insert([form]);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm(initialForm);
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-5">
      <div className="form-field">
        <label className="text-sm text-ink-muted">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full mt-2 bg-transparent border border-white/15 rounded-lg px-4 py-3 outline-none focus:border-cyan transition-colors"
        />
      </div>

      <div className="form-field">
        <label className="text-sm text-ink-muted">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@email.com"
          className="w-full mt-2 bg-transparent border border-white/15 rounded-lg px-4 py-3 outline-none focus:border-cyan transition-colors"
        />
      </div>

      <div className="form-field">
        <label className="text-sm text-ink-muted">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="What are you looking to build?"
          className="w-full mt-2 bg-transparent border border-white/15 rounded-lg px-4 py-3 outline-none focus:border-cyan transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        data-cursor-hover
        className="form-field w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-violet to-cyan text-bg font-medium disabled:opacity-60"
      >
        {status === "loading" && "Sending..."}
        {status === "success" && (<><FiCheck /> Message sent</>)}
        {status === "error" && (<><FiAlertCircle /> Something went wrong - try again</>)}
        {status === "idle" && (<><FiSend /> Send message</>)}
      </button>
    </form>
  );
}