
import "./Skills.css";
import { useState } from "react";

import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
  FaChartBar,
  FaChartPie,
  FaBrain,
  FaCode,
  FaServer,
  FaCircle,
  FaBolt,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint
} from "react-icons/fa";

import {
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiStreamlit,
  SiMongodb,
  SiSqlite
} from "react-icons/si";

const modules = {
  Programming: {
    title: "Programming",
    skills: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaDatabase />, name: "SQL" }
    ]
  },

  Backend: {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaServer />, name: "Express" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" }
    ]
  },

  Analytics: {
    title: "Analytics",
    skills: [
      { icon: <FaChartPie />, name: "Power BI" },
      { icon: <FaChartBar />, name: "Data Visualization" },
      { icon: <SiStreamlit />, name: "Streamlit" }
    ]
  },

  DataEngineering: {
    title: "Data Engineering",
    skills: [
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiSqlite />, name: "SQLite" }
    ]
  },

  Cloud: {
    title: "Cloud & DevOps",
    skills: [
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaGitAlt />, name: "Git" }
    ]
  },

  AI: {
    title: "AI / Machine Learning",
    skills: [
      { icon: <FaBrain />, name: "Machine Learning" },
      { icon: <FaCode />, name: "Scikit-Learn" }
    ]
  },

  Microsoft: {
    title: "Microsoft Tools",
    skills: [
      { icon: <FaFileWord />, name: "Microsoft Word" },
      { icon: <FaFileExcel />, name: "Microsoft Excel" },
      { icon: <FaFilePowerpoint />, name: "PowerPoint" }
    ]
  }
};

export default function Skills() {
  const [selected, setSelected] = useState("Programming");

  const current = modules[selected];
  const moduleKeys = Object.keys(modules);

  return (
    <section className="skillsContainer" id="skills">

      {/* HEADER */}
      <div className="skillsHeader">
        <p>STARK INDUSTRIES // SYSTEM DATABASE</p>

        <h1>TECHNOLOGY MATRIX</h1>

        <span>
          ARTIFICIAL INTELLIGENCE // ENGINEERING SYSTEMS
        </span>
      </div>

      {/* SYSTEM STATUS */}
      <div className="skillsSystemBar">
        <div className="skillsStatus">
          <FaCircle />
          SKILL DATABASE ONLINE
        </div>

        <div className="skillsLine"></div>

        <div className="skillsStatus right">
          <FaBolt />
          {moduleKeys.length} MODULES ACTIVE
        </div>
      </div>

      {/* MODULE SELECTOR */}
      <div className="moduleBar">
        <div className="moduleLabel">
          SELECT SYSTEM MODULE
        </div>

        {moduleKeys.map((item, index) => (
          <button
            key={item}
            type="button"
            className={selected === item ? "activeModule" : ""}
            onClick={() => setSelected(item)}
            aria-pressed={selected === item}
            aria-label={`Display ${modules[item].title} skills`}
          >
            <span className="moduleNumber">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span>{modules[item].title}</span>

            <span className="moduleArrow">→</span>
          </button>
        ))}
      </div>

      {/* SKILL DATABASE CARD */}
      <div className="databaseCard">

        <div className="hudCorner topLeft"></div>
        <div className="hudCorner topRight"></div>
        <div className="hudCorner bottomLeft"></div>
        <div className="hudCorner bottomRight"></div>

        <div className="skillScan"></div>

        {/* DATABASE HEADER */}
        <div className="databaseTop">
          <div className="databaseHeading">
            <div className="miniReactor">
              <div className="miniReactorOuter"></div>
              <div className="miniReactorInner"></div>
              <FaBolt />
            </div>

            <div>
              <p>STARK SYSTEM MODULE</p>
              <h2>{current.title}</h2>
            </div>
          </div>

          <div className="moduleStatus">
            <FaCircle />
            ACTIVE
          </div>
        </div>

        <div className="databaseDivider"></div>

        {/* SKILL INVENTORY */}
        <div className="skillsContent">
          <div className="skillsSectionTitle">
            <span>TECHNOLOGY INVENTORY</span>

            <small>
              {current.skills.length} SYSTEMS DETECTED
            </small>
          </div>

          <div className="skillGrid">
            {current.skills.map((item, index) => (
              <div className="skillCard" key={item.name}>
                <div className="skillNumber">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="skillIcon">
                  {item.icon}
                </div>

                <div className="skillName">
                  {item.name}
                </div>

                <div className="skillIndicator">
                  <FaCircle />
                  READY
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="skillsFooter">
          <span>STARK SYSTEMS // SECURE</span>

          <span>
            MODULE // {selected.toUpperCase()}
          </span>
        </div>
      </div>
    </section>
  );
}
