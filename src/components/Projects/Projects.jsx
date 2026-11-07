import "./Projects.css";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaCircle,
  FaBolt,
  FaChartLine,
  FaBrain
} from "react-icons/fa";

import {
  SiPandas,
  SiPostgresql,
  SiStreamlit,
  SiMongodb,
  SiSqlite,
  SiNumpy,
  SiScikitlearn
} from "react-icons/si";

const projects = [
  {
    id: "001",
    title: "World Insights Lakehouse",
    category: "DATA ENGINEERING",
    status: "COMPLETED",
    description:
      "Built an end-to-end ETL pipeline using World Bank APIs. Extracted, transformed and loaded datasets into SQLite, then visualized insights through a Streamlit dashboard.",
    github:
      "https://github.com/DevABHI2005/azentrix-fullstack-task2",
    live: "",
    tech: [
      { name: "Python", icon: <FaPython /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Database", icon: <FaDatabase /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Streamlit", icon: <SiStreamlit /> }
    ],
    highlights: [
      "REST API integration",
      "Automated ETL pipeline",
      "SQLite database",
      "Interactive dashboard",
      "Docker support"
    ]
  },
  {
    id: "002",
    title: "CryptoTracker",
    category: "FULL-STACK DEVELOPMENT",
    status: "COMPLETED",
    description:
      "Full-stack cryptocurrency tracker with authentication, live market data, favourites, a news feed and interactive charts.",
    github:
      "https://github.com/DevABHI2005/CryptoTracker",
    live:
      "https://crypto-tracker-ten-gold-54.vercel.app/",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Database", icon: <FaDatabase /> }
    ],
    highlights: [
      "Google authentication",
      "CoinGecko API",
      "Interactive charts",
      "News API",
      "Favourite coins"
    ]
  },
  {
    id: "003",
    title: "Customer Purchase Analytics",
    category: "DATA ANALYTICS",
    status: "COMPLETED",
    description:
      "Analyzed retail transaction data using Python, SQL and Power BI to discover customer behaviour and revenue insights.",
    github:
      "https://github.com/DevABHI2005/Consumer-Purchase-Behavior-Analytics",
    live: "",
    tech: [
      { name: "Python", icon: <FaPython /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Database", icon: <FaDatabase /> }
    ],
    highlights: [
      "Revenue analysis",
      "Customer segmentation",
      "Power BI dashboard",
      "SQL analytics"
    ]
  },
  {
    id: "004",
    title: "Predictive Analytics for E-Learning Engagement",
    category: "CAPSTONE // DATA SCIENCE",
    status: "IN PROGRESS",
    description:
      "A data science capstone focused on analyzing learner activity and developing predictive insights to better understand student engagement and support personalized learning experiences.",
    github: "https://github.com/DevABHI2005/Predictive-Analytics-for-E-Learning-Engagement",
    live: "",
    tech: [
      { name: "Python", icon: <FaPython /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Analytics", icon: <FaChartLine /> },
      { name: "Machine Learning", icon: <FaBrain /> }
    ],
    highlights: [
      "Learner activity analysis",
      "Engagement metric exploration",
      "Course-wise engagement analysis",
      "Predictive modelling – in progress",
      "Personalized learning insights – objective"
    ]
  }
];

const cardVariants = {
  initial: {
    opacity: 0,
    y: 14
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.18
    }
  }
};

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const project = projects[selected];
  const completedCount = projects.filter(
    (item) => item.status === "COMPLETED"
  ).length;

  const handleCardMove = (event) => {
    if (reduceMotion || window.matchMedia("(hover: none)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - y) * 3,
      y: (x - 0.5) * 4
    });

    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${x * 100}%`
    );

    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${y * 100}%`
    );
  };

  const resetCardTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  const selectProject = (index) => {
    setSelected(index);
    resetCardTilt();
  };

  return (
    <div className="projects">
      <div className="projectsAmbient" aria-hidden="true" />
      <div className="projectsGrid" aria-hidden="true" />

      {/* Section heading */}
      <div className="projectsTitle">
        <p>STARK INDUSTRIES // PROJECT ARCHIVE</p>
        <h1>MISSION CONTROL</h1>
        <span>
          ENGINEERING SYSTEMS // DEVELOPMENT DATABASE
        </span>
      </div>

      {/* System information */}
      <div className="projectSystemBar">
        <div className="systemIndicator">
          <FaCircle />
          PROJECT DATABASE
        </div>

        <div className="systemLine" />

        <div className="systemStatus">
          <FaBolt />
          {projects.length} PROJECTS
        </div>

        <div className="systemCompleted">
          {completedCount} COMPLETED
        </div>
      </div>

      <div className="projectsContainer">
        {/* Mission selection */}
        <aside className="projectList" aria-label="Project selection">
          <div className="missionLabel">
            <span>SELECT PROJECT</span>
            <span>{String(projects.length).padStart(2, "0")} RECORDS</span>
          </div>

          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={
                selected === index
                  ? "missionButton activeMission"
                  : "missionButton"
              }
              onClick={() => selectProject(index)}
              aria-pressed={selected === index}
            >
              <span className="missionNumber">{item.id}</span>

              <span className="missionText">
                <span className="missionName">{item.title}</span>
                <span className="missionCategory">{item.category}</span>
              </span>

              <span className="missionArrow" aria-hidden="true">
                →
              </span>
            </button>
          ))}
        </aside>

        {/* Selected project */}
        <AnimatePresence mode="wait">
          <motion.article
            key={project.id}
            className="projectDetails"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onPointerMove={handleCardMove}
            onPointerLeave={resetCardTilt}
            style={{
              rotateX: reduceMotion ? 0 : tilt.x,
              rotateY: reduceMotion ? 0 : tilt.y,
              transformPerspective: 1200
            }}
          >
            <div className="projectSpotlight" aria-hidden="true" />

            <div className="hudCorner topLeft" />
            <div className="hudCorner topRight" />
            <div className="hudCorner bottomLeft" />
            <div className="hudCorner bottomRight" />

            <div className="projectScan" />

            <div className="projectTopLine">
              <span>PROJECT FILE // {project.id}</span>

              <span
                className={`projectStatus ${
                  project.status === "IN PROGRESS"
                    ? "statusProgress"
                    : "statusCompleted"
                }`}
              >
                <FaCircle />
                {project.status}
              </span>
            </div>

            <div className="projectHeading">
              <div className="projectReactor" aria-hidden="true">
                <div className="reactorOuter" />
                <div className="reactorInner" />
                {project.status === "IN PROGRESS" ? (
                  <FaChartLine />
                ) : (
                  <FaBolt />
                )}
              </div>

              <div className="projectHeadingText">
                <p className="projectCategory">{project.category}</p>
                <h2>{project.title}</h2>
              </div>
            </div>

            <div className="projectDivider" />

            <div className="projectDescription">
              <span>PROJECT OVERVIEW</span>
              <p>{project.description}</p>
            </div>

            <div className="projectSection">
              <h3>TECHNOLOGY MATRIX</h3>

              <div className="techIcons">
                {project.tech.map((tech) => (
                  <div
                    key={tech.name}
                    className="iconBox"
                    title={tech.name}
                    aria-label={tech.name}
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="projectSection">
              <h3>
                {project.status === "IN PROGRESS"
                  ? "CURRENT WORKSTREAMS"
                  : "MISSION OBJECTIVES"}
              </h3>

              <div className="highlightGrid">
                {project.highlights.map((item, index) => (
                  <div key={item} className="highlightItem">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="buttons">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  ACCESS SOURCE
                  <FaExternalLinkAlt className="buttonExternalIcon" />
                </a>
              ) : (
                <span className="unavailableButton">
                  <FaGithub />
                  SOURCE LINK PENDING
                </span>
              )}

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="liveButton"
                >
                  <FaExternalLinkAlt />
                  VIEW LIVE PROJECT
                </a>
              ) : null}
            </div>

            <div className="projectFooter">
              <span>AEGIS PROJECT ARCHIVE</span>
              <span>
                {project.status === "IN PROGRESS"
                  ? "DEVELOPMENT ACTIVE"
                  : "PROJECT COMPLETED"}
              </span>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}