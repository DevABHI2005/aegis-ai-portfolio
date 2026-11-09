
import {
  useState,
  useEffect,
  lazy,
  Suspense
} from "react";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./index.css";

// Immediately loaded components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Particles from "./components/Particles";
import CursorGlow from "./components/CursorGlow";

// Lazy-loaded sections
const About = lazy(() => import("./components/About/About"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Timeline = lazy(() => import("./components/Timeline/Timeline"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certifications = lazy(() => import("./components/Certifications/Certifications"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

// Load a component when its section approaches the viewport
function LazySection({
  id,
  label,
  Component,
  minHeight = 400
}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [sectionRef, setSectionRef] = useState(null);

  useEffect(() => {
    if (!sectionRef) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px 0px",
        threshold: 0
      }
    );

    observer.observe(sectionRef);

    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <section
      id={id}
      aria-label={label}
      aria-busy={!shouldLoad}
      ref={setSectionRef}
    >
      {shouldLoad ? (
        <Suspense
          fallback={
            <div
              className="sectionLoading"
              style={{ minHeight }}
              aria-label={`Loading ${label}`}
              role="status"
            >
              <span className="sectionLoadingText">
                LOADING AEGIS MODULE...
              </span>
            </div>
          }
        >
          <Component />
        </Suspense>
      ) : (
        <div
          className="sectionLoading"
          style={{ minHeight }}
          aria-hidden="true"
        />
      )}
    </section>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      anchors: true
    });

    window.__aegisLenis = lenis;

    return () => {
      lenis.destroy();
      delete window.__aegisLenis;
    };
  }, [loaded]);

  return (
    <>
      {!loaded ? (
        <LoadingScreen onFinish={() => setLoaded(true)} />
      ) : (
        <>
          <a href="#main-content" className="skipLink">
            Skip to content
          </a>

          <CursorGlow />
          <Particles />

          <Navbar />

          <main id="main-content">
            <Hero />

            <a href="#contact" className="hireBtn">
              <span className="hireBtnPulse" />
              <span>LET'S CONNECT</span>
              <span aria-hidden="true">↗</span>
            </a>

            <LazySection
              id="about"
              label="About me"
              Component={About}
              minHeight={500}
            />

            

            <LazySection
              id="education"
              label="Education"
              Component={Timeline}
              minHeight={500}
            />

            <LazySection
              id="experience"
              label="Professional experience"
              Component={Experience}
              minHeight={550}
            />

            <LazySection
              id="skills"
              label="Technical skills"
              Component={Skills}
              minHeight={500}
            />

            <LazySection
              id="projects"
              label="Projects"
              Component={Projects}
              minHeight={600}
            />

            <LazySection
              id="certifications"
              label="Certifications"
              Component={Certifications}
              minHeight={500}
            />

            <LazySection
              id="contact"
              label="Contact"
              Component={Contact}
              minHeight={650}
            />
          </main>

          <LazySection
            label="Footer"
            Component={Footer}
            minHeight={150}
          />
        </>
      )}
    </>
  );
}

export default App;
