
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
    description: "Core programming languages and database querying.",
    skills: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaDatabase />, name: "SQL" }
    ]
  },

  Backend: {
    title: "Backend",
    description: "Server-side development and database technologies.",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaServer />, name: "Express" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" }
    ]
  },

  Analytics: {
    title: "Analytics",
    description: "Data analysis, visualization and dashboard development.",
    skills: [
      { icon: <FaChartPie />, name: "Power BI" },
      { icon: <FaChartBar />, name: "Data Visualization" },
      { icon: <SiStreamlit />, name: "Streamlit" }
    ]
  },

  DataEngineering: {
    title: "Data Engineering",
    description: "Data processing, storage and analytical infrastructure.",
    skills: [
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiSqlite />, name: "SQLite" }
    ]
  },

  Cloud: {
    title: "Cloud & DevOps",
    description: "Cloud platforms, version control and containerization.",
    skills: [
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaGitAlt />, name: "Git" }
    ]
  },

  AI: {
    title: "AI / Machine Learning",
    description: "Machine learning concepts and implementation tools.",
    skills: [
      { icon: <FaBrain />, name: "Machine Learning" },
      { icon: <FaCode />, name: "Scikit-Learn" }
    ]
  },

  Microsoft: {
    title: "Microsoft Tools",
    description: "Productivity and business documentation tools.",
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

        <div className="skillsLine" />

        <div className="skillsStatus right">
          <FaBolt />
          {moduleKeys.length} MODULES ACTIVE
        </div>
      </div>

      {/* TWO-COLUMN WORKSPACE */}
      <div className="skillsWorkspace">

        {/* LEFT: CATEGORY SELECTOR */}
        <aside className="moduleSidebar">
          <div className="moduleSidebarHeader">
            <span>SELECT SYSTEM MODULE</span>
            <small>{String(moduleKeys.length).padStart(2, "0")} RECORDS</small>
          </div>

          <div className="moduleList">
            {moduleKeys.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`moduleItem ${
                  selected === item ? "activeModule" : ""
                }`}
                onClick={() => setSelected(item)}
                aria-pressed={selected === item}
              >
                <span className="moduleNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="moduleItemText">
                  {modules[item].title}
                  <small>
                    {modules[item].skills.length} TECHNOLOGIES
                  </small>
                </span>

                <span className="moduleArrow">→</span>
              </button>
            ))}
          </div>

          <div className="moduleSidebarFooter">
            STARK SYSTEMS // MODULE INDEX
          </div>
        </aside>

        {/* RIGHT: SELECTED MODULE */}
        <div className="databaseCard">

          <div className="hudCorner topLeft" />
          <div className="hudCorner topRight" />
          <div className="hudCorner bottomLeft" />
          <div className="hudCorner bottomRight" />

          <div className="skillScan" />

          {/* DATABASE HEADER */}
          <div className="databaseTop">
            <div className="databaseHeading">
              <div className="miniReactor">
                <div className="miniReactorOuter" />
                <div className="miniReactorInner" />
                <FaBolt />
              </div>

              <div>
                <p>STARK SYSTEM MODULE</p>
                <h2>{current.title}</h2>
                <span className="moduleDescription">
                  {current.description}
                </span>
              </div>
            </div>

            <div className="moduleStatus">
              <FaCircle />
              ACTIVE
            </div>
          </div>

          <div className="databaseDivider" />

          {/* SKILL INVENTORY */}
          <div className="skillsContent">
            <div className="skillsSectionTitle">
              <span>TECHNOLOGY INVENTORY</span>
              <small>
                {String(current.skills.length).padStart(2, "0")} SYSTEMS DETECTED
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
            <span>MODULE // {selected.toUpperCase()}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
