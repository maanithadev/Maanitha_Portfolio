import { useEffect, useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Certificates from "./components/Certificates";
import Timeline from "./components/Timeline";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="noise-layer" />
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <Navbar />
      <main>
        <Hero ready={!loading} />
        <About />
        <Skills />
        <Projects />
        {/* <Certificates /> */}
        <Timeline />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}