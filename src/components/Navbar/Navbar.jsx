import "./Navbar.css";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "HOME", code: "01" },
  { id: "about", label: "ABOUT", code: "02" },
  { id: "experience", label: "EXPERIENCE", code: "03" },
  { id: "education", label: "EDUCATION", code: "04" },
  { id: "skills", label: "SKILLS", code: "05" },
  { id: "projects", label: "PROJECTS", code: "06" },
  { id: "certifications", label: "CERTIFICATIONS", code: "07" },
  { id: "contact", label: "CONTACT", code: "08" }
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let previousScroll = window.scrollY;
    let ticking = false;

    const updateNavigation = () => {
      const current = window.scrollY;

      if (menuOpen || current < 100) {
        setShowNavbar(true);
      } else if (current > previousScroll + 3) {
        setShowNavbar(false);
      } else if (current < previousScroll - 3) {
        setShowNavbar(true);
      }

      previousScroll = current;

      const offset = 130;
      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (current + offset >= top && current + offset < bottom) {
          currentSection = item.id;
        }
      });

      setActive(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavigation);
        ticking = true;
      }

      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateNavigation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (!section) return;

  const navbarOffset = window.innerWidth <= 800 ? 85 : 110;

  if (window.__aegisLenis) {
    window.__aegisLenis.scrollTo(section, {
      offset: -navbarOffset,
      duration: 1.2
    });
  } else {
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, sectionTop - navbarOffset),
      behavior: "smooth"
    });
  }

  setActive(id);
  setShowNavbar(true);
  setMenuOpen(false);
};

  const renderNavItems = () =>
    navItems.map((item) => (
      <li key={item.id}>
        <button
          type="button"
          className={active === item.id ? "active" : ""}
          aria-current={active === item.id ? "location" : undefined}
          onClick={() => scrollToSection(item.id)}
        >
          <span className="navCode">{item.code}</span>
          <span className="navLabel">{item.label}</span>
        </button>
      </li>
    ));

  return (
    <nav
      className={`navbar ${showNavbar ? "show" : "hide"} ${
        menuOpen ? "menuIsOpen" : ""
      }`}
      aria-label="Main navigation"
    >
      <button
        type="button"
        className="logo"
        onClick={() => scrollToSection("home")}
        aria-label="AEGIS AI home"
      >
        <span className="logoMark" aria-hidden="true">
          ◇
        </span>

        <span className="logoText">
          <strong>AEGIS</strong>
          <small>PERSONAL INTELLIGENCE SYSTEM</small>
        </span>
      </button>

      <div className="navCore">
        <div className="navTopLine">
          AEGIS // COMMAND INTERFACE
        </div>

        <ul>{renderNavItems()}</ul>
      </div>

      <div className="systemStatus">
        <div className="statusIndicator">
          <span />
        </div>

        <div className="statusText">
          <small>SYSTEM</small>
          <strong>ONLINE</strong>
        </div>
      </div>

      <button
        type="button"
        className={`mobileMenuButton ${menuOpen ? "open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          setMenuOpen((previous) => !previous);
          setShowNavbar(true);
        }}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-navigation"
        className={`mobileNavPanel ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobileNavHeader">
          <span>COMMAND MODULES</span>
          <span className="mobileOnline">● ONLINE</span>
        </div>

        <ul>{renderNavItems()}</ul>
      </div>
    </nav>
  );
}