import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCircle,
  FaBolt,
  FaArrowUp
} from "react-icons/fa";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <footer className="starkFooter">

      <div className="footerGlow"></div>

      {/* TOP SYSTEM LINE */}

      <div className="footerSystemLine">

        <span>
          STARK INDUSTRIES // PERSONAL SYSTEM
        </span>

        <div className="footerStatus">

          <FaCircle />

          SYSTEM ONLINE

        </div>

      </div>


      {/* MAIN FOOTER */}

      <div className="footerMain">

        {/* BRAND */}

        <div className="footerBrand">

          <div className="footerReactor">

            <div className="footerRing"></div>

            <div className="footerCore"></div>

            <FaBolt />

          </div>

          <div>

            <h2>
              AEGIS AI
            </h2>

            <p>
              PERSONAL INTELLIGENCE SYSTEM
            </p>

          </div>

        </div>


        {/* DESCRIPTION */}

        <div className="footerDescription">

          <p>
            Building intelligent systems, useful applications
            and technology-driven solutions.
          </p>

        </div>


        {/* SOCIALS */}

        <div className="footerSocials">

          <a
            href="https://github.com/DevABHI2005"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abhiram1562/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:babhiram1947@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footerBottom">

        <div>

          <span>
            © 2026 ABHIRAM
          </span>

          <span className="separator">
            //
          </span>

          <span>
            ALL SYSTEMS OPERATIONAL
          </span>

        </div>


        <div className="footerCore">

          <span>
            JARVIS CORE
          </span>

          <strong>
            v1.0
          </strong>

        </div>


        <button
          className="backTop"
          onClick={scrollToTop}
          aria-label="Back to top"
        >

          <FaArrowUp />

        </button>

      </div>

    </footer>

  );
}