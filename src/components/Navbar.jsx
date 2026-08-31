import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "../lenis/LenisProvider";

import "./Navbar.css";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

function Navbar() {
  // Only enable the section nav on the home page where the anchors exist.
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const lenis = useLenis();

  // Responsive Navbar (media query)
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  //Navbar Scrolls Up
  const [navBar, setNavbar] = useState(false);
  const scrollNav = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Which section is currently in view (for highlighting nav links).
  // Derived from the live scroll position so it updates both on manual
  // scrolling AND on Lenis-driven programmatic scrolls (SectionNav buttons).
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
    return () => window.removeEventListener("scroll", scrollNav);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const computeActive = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let current = NAV_LINKS[0].id;
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
        else break;
      }
      setActiveSection(current);
    };

    // Attach to Lenis if available so its smooth scroll keeps the highlight in
    // sync; otherwise fall back to the native scroll event (mobile/touch).
    if (lenis) {
      lenis.on("scroll", computeActive);
      computeActive();
      return () => lenis.off("scroll", computeActive);
    }

    window.addEventListener("scroll", computeActive);
    computeActive();
    return () => window.removeEventListener("scroll", computeActive);
  }, [isHome, lenis]);

  const handleNav = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate("/");
      requestAnimationFrame(() => scrollToSection(id));
    }
    hideNavbar();
  };

  const scrollToSection = (id) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: 0 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav ref={navRef} className={navBar ? "active" : ""}>
        <button className="nav-btn nav-close" onClick={showNavbar}>
          close
        </button>

        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`/#${id}`}
            onClick={(e) => handleNav(e, id)}
            className={`uppercase tracking-widest ${isHome && activeSection === id ? "active" : ""}`}
          >
            {label}
          </a>
        ))}

        <a
          href="/ChloeNgResume.pdf"
          target="_blank"
          rel="noreferrer"
          className="uppercase tracking-widest"
        >
          Resume
        </a>
      </nav>

      <button className="nav-btn nav-menu" onClick={showNavbar}>
        open
      </button>
    </header>
  );
}

export default Navbar;
