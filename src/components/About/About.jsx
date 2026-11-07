
import "./About.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaFileDownload
} from "react-icons/fa";

const modules = [
  "PYTHON",
  "SQL",
  "POWER BI",
  "PANDAS",
  "ETL",
  "AWS",
  "POSTGRESQL",
  "STREAMLIT"
];

const profileDetails = [
  {
    label: "EDUCATION",
    value: "B.TECH // COMPUTER SCIENCE"
  },
  {
    label: "LOCATION",
    value: "HYDERABAD, INDIA"
  },
  {
    label: "PRIMARY DOMAIN",
    value: "DATA ANALYTICS & ENGINEERING"
  },
  {
    label: "OPPORTUNITY STATUS",
    value: "OPEN TO OPPORTUNITIES",
    available: true
  }
];

export default function About() {
  return (
    <section className="about" id="about">
      {/* HEADER */}
      <div className="aboutHeader">
        <span className="aboutLabel">
          AEGIS // IDENTITY DATABASE
        </span>

        <h1>
          OPERATOR <span>PROFILE</span>
        </h1>

        <p className="aboutIntro">
          The person behind the intelligence system.
        </p>
      </div>

      <div className="identityInterface">
        {/* LEFT — HOLOGRAPHIC CORE */}
        <div
          className="identityVisual"
          aria-label="AEGIS holographic identity core"
        >
          <div className="scanGrid"></div>

          <div className="targetRing ringA"></div>
          <div className="targetRing ringB"></div>
          <div className="targetRing ringC"></div>

          <div className="profileCore">
            <div className="coreGlow"></div>

            <div className="coreText">
              <span>AEGIS</span>
              <strong>01</strong>
            </div>
          </div>

          <div className="targetLine horizontal"></div>
          <div className="targetLine vertical"></div>

          <div className="coordinate topLeft">
            X: 17.42
            <br />
            Y: 84.19
          </div>

          <div className="coordinate bottomRight">
            SYSTEM: ONLINE
            <br />
            PROFILE: ACTIVE
          </div>

          <div className="visualCaption">
            PERSONAL INTELLIGENCE SYSTEM
          </div>
        </div>

        {/* RIGHT — OPERATOR PROFILE */}
        <div className="identityPanel">
          <div className="panelTop">
            <div>
              <span className="panelLabel">
                OPERATOR ID // 001
              </span>

              <h2>
                ABHIRAM
                <span> BHAIRAVABHOTLA</span>
              </h2>
            </div>

            <div className="verifiedBadge">
              <span></span>
              PROFILE ACTIVE
            </div>
          </div>

          <p className="identityDescription">
            I'm a Computer Science graduate interested in
            <strong>
              {" "}Data Analytics, Data Engineering and AI-powered applications.
            </strong>
            {" "}I enjoy working with data, building practical solutions
            and turning complex information into meaningful insights.

            <br />
            <br />

            My focus is on developing useful, reliable systems
            using modern technologies and analytical tools.
          </p>

          {/* PROFILE INFORMATION */}
          <div className="profileGrid">
            {profileDetails.map((item) => (
              <div className="profileItem" key={item.label}>
                <span>{item.label}</span>

                <strong className={item.available ? "available" : ""}>
                  {item.value}
                </strong>
              </div>
            ))}
          </div>

          {/* SPECIALIZATION */}
          <div className="specialization">
            <div className="specializationHeader">
              <span>TECHNICAL SPECIALIZATION</span>

              <strong>AEGIS MODULES</strong>
            </div>

            <div className="moduleTags">
              {modules.map((module) => (
                <span key={module}>{module}</span>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="identityActions">
            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resumeButton"
>
  <FaFileDownload />
  VIEW RESUME
</a>

            <a
              href="https://github.com/DevABHI2005"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abhiram1562/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialButton"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="aboutFooter">
        <span>AEGIS CORE // IDENTITY ACTIVE</span>

        <div></div>

        <span>ACCESS LEVEL: PUBLIC</span>
      </div>
    </section>
  );
}
