
import "./Experience.css";

import {
  FaGithub,
  FaCertificate,
  FaDatabase,
  FaPython,
  FaCheckCircle,
  FaClock,
  FaCogs,
  FaFileCsv,
  FaGlobe
} from "react-icons/fa";

import {
  SiPandas,
  SiSqlite,
  SiStreamlit
} from "react-icons/si";

export default function Experience() {
  const tech = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <FaGlobe />, name: "REST API" },
    { icon: <FaFileCsv />, name: "CSV Integration" },
    { icon: <FaDatabase />, name: "SQLAlchemy" },
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <FaClock />, name: "APScheduler" },
    { icon: <SiStreamlit />, name: "Streamlit" },
    { icon: <FaCogs />, name: "ETL" },
    { icon: <FaGithub />, name: "GitHub" }
  ];

  const achievements = [
    "Extracted population data through the World Bank REST API",
    "Integrated API data with the WHR 2024 CSV dataset",
    "Cleaned and transformed datasets using Pandas",
    "Created derived analytical fields for country-level insights",
    "Loaded processed data into SQLite using SQLAlchemy",
    "Scheduled recurring pipeline executions using APScheduler",
    "Developed a Streamlit dashboard for data exploration"
  ];

  return (
    <section className="experienceContainer">

      {/* HEADER */}
      <div className="experienceHeader">
        <p>AEGIS // MISSION CONTROL</p>

        <h1>
          MISSION <span>001</span>
        </h1>

        <div className="missionSubtitle">
          FIELD EXPERIENCE // DATA ENGINEERING
        </div>
      </div>

      {/* MISSION INTERFACE */}
      <div className="missionInterface">

        {/* LEFT MISSION PANEL */}
        <aside className="missionRail">

          <div className="missionStatus">
            <span className="statusDot"></span>

            <div>
              <small>MISSION STATUS</small>
              <strong>COMPLETED</strong>
            </div>
          </div>

          <div className="missionNumber">001</div>

          <div className="railLine"></div>

          <div className="railInfo">
            <span>ORGANIZATION</span>
            <strong>AZENTRIX TECHNOLOGIES</strong>
          </div>

          <div className="railInfo">
            <span>ROLE</span>
            <strong>DATA ENGINEERING INTERN</strong>
          </div>

          <div className="railInfo">
            <span>OPERATION TYPE</span>
            <strong>ETL / DATA ANALYTICS</strong>
          </div>

          <div className="railInfo">
            <span>CORE FOCUS</span>
            <strong>DATA PIPELINES</strong>
          </div>

        </aside>

        {/* MAIN CARD */}
        <div className="experienceCard">

          {/* TOP */}
          <div className="experienceTop">
            <div>
              <span className="missionCode">
                MISSION 001 // FIELD OPERATION
              </span>

              <h2>Data Engineering Intern</h2>

              <h3>Azentrix Technologies</h3>
            </div>

            <div className="status">
              <FaCheckCircle />
              COMPLETED
            </div>
          </div>

          <div className="divider"></div>

          {/* OBJECTIVE */}
          <div className="objective">
            <h4>◇ MISSION OBJECTIVE</h4>

            <p>
              Developed an automated ETL workflow to extract population
              indicators from the World Bank REST API, integrate external
              CSV data, perform data cleaning and transformation, and load
              processed records into SQLite. Also developed a Streamlit
              dashboard to explore the resulting country-level analytics.
            </p>
          </div>

          <div className="divider"></div>

          {/* ACHIEVEMENTS */}
          <div className="achievementSection">
            <h4>◇ MISSION ACHIEVEMENTS</h4>

            <div className="achievementGrid">
              {achievements.map((item, index) => (
                <div
                  key={item}
                  className="achievementItem"
                >
                  <span className="achievementNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FaCheckCircle />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="divider"></div>

          {/* TECHNOLOGY STACK */}
          <div className="techSection">
            <h4>◇ TECHNOLOGY LOADOUT</h4>

            <div className="techGrid">
              {tech.map((item) => (
                <div
                  className="techCard"
                  key={item.name}
                >
                  <div className="techIcon">
                    {item.icon}
                  </div>

                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="experienceButtons">

            <a
              href="https://github.com/DevABHI2005/azentrix-fullstack-task2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Azentrix project repository on GitHub"
            >
              <FaGithub />
              VIEW MISSION REPOSITORY
              <span>→</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1RU3yq5n1N11O3bCNZrhgRXd0L3aMA0Kp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View internship certificate"
            >
              <FaCertificate />
              VIEW CERTIFICATE
              <span>→</span>
            </a>

          </div>

          {/* FOOTER */}
          <div className="missionFooter">
            <span>AEGIS RECORD // VERIFIED</span>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>

        </div>
      </div>
    </section>
  );
}
