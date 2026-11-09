
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "HOME", code: "01" },
  { id: "about", label: "ABOUT", code: "02" },
  { id: "education", label: "EDUCATION", code: "03" },
  { id: "experience", label: "EXPERIENCE", code: "04" },
  { id: "skills", label: "SKILLS", code: "05" },
  { id: "projects", label: "PROJECTS", code: "06" },
  { id: "certifications", label: "CERTIFICATIONS", code: "07" },
  { id: "contact", label: "CONTACT", code: "08" }
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigatingRef = useRef(false);
  const navigationTimeoutRef = useRef(null);

  useEffect(() => {
    let previousScroll = window.scrollY;
    let ticking = false;

    const updateNavigation = () => {
      const current = window.scrollY;
      const navbar = document.querySelector(".navbar");

      if (navigatingRef.current || menuOpen || current < 100) {
        setShowNavbar(true);
      } else if (current > previousScroll + 3) {
        setShowNavbar(false);
      } else if (current < previousScroll - 3) {
        setShowNavbar(true);
      }

      previousScroll = current;

      const navbarOffset = navbar
        ? navbar.getBoundingClientRect().height + 35
        : 110;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarOffset && rect.bottom > navbarOffset) {
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

      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateNavigation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    navigatingRef.current = true;
    setShowNavbar(true);
    setActive(id);
    setMenuOpen(false);

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    const navbar = document.querySelector(".navbar");

    const navbarOffset = navbar
      ? navbar.getBoundingClientRect().height +
        (window.innerWidth <= 600 ? 25 : 35)
      : 110;

    const targetPosition = Math.max(
      0,
      section.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset
    );

    if (window.__aegisLenis) {
      window.__aegisLenis.scrollTo(targetPosition, {
        duration: 1.2
      });
    } else {
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }

    navigationTimeoutRef.current = setTimeout(() => {
      navigatingRef.current = false;
    }, 1600);
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
        aria-label={
          menuOpen ? "Close navigation menu" : "Open navigation menu"
        }
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
