
import "./Timeline.css";

import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaStar,
  FaMapMarkerAlt,
  FaCheckCircle
} from "react-icons/fa";

const education = [
  {
    code: "ACADEMIC RECORD // 001",
    degree: "B.Tech - Computer Science Engineering",
    institute: "KL University",
    location: "Vaddeswaram, Guntur, Andhra Pradesh",
    duration: "2022 - 2026",
    grade: "CGPA: 9.2 / 10",
    status: "COMPLETED",
    description:
      "Studied Computer Science Engineering with academic and practical exposure to Data Engineering, Backend Development, Data Analytics and AI.",
    icon: <FaGraduationCap />
  },
  {
    code: "ACADEMIC RECORD // 002",
    degree: "Intermediate (MPC)",
    institute: "Gowtham Junior College",
    location: "Tirumalgiri, Hyderabad, Telangana",
    duration: "2020 - 2022",
    grade: "79%",
    status: "COMPLETED",
    description:
      "Built a foundation in Mathematics, Physics and Chemistry.",
    icon: <FaUniversity />
  },
  {
    code: "ACADEMIC RECORD // 003",
    degree: "Secondary School",
    institute: "D.A.V Public School",
    location: "Safilguda, Hyderabad, Telangana",
    duration: "2020",
    grade: "86%",
    status: "COMPLETED",
    description:
      "Completed secondary education with a strong academic foundation.",
    icon: <FaSchool />
  }
];

export default function Timeline() {
  return (
    <section className="educationSection">

      {/* HEADER */}
      <div className="educationTitle">
        <p>AEGIS // TRAINING ARCHIVE</p>

        <h1>
          EDUCATION <span>LOG</span>
        </h1>

        <div className="educationSubtitle">
          ACADEMIC RECORD // VERIFIED
        </div>
      </div>

      {/* TIMELINE */}
      <div className="timeline">

        <div className="timelineScanner"></div>

        {education.map((item, index) => (
          <article
            className={`timelineItem ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={item.code}
          >

            {/* TIMELINE NODE */}
            <div className="timelineNode" aria-hidden="true">
              <div className="nodeCore"></div>
            </div>

            {/* EDUCATION CARD */}
            <div className="timelineCard">

              {/* CARD HEADER */}
              <div className="cardTop">

                <div className="degreeIcon">
                  {item.icon}
                </div>

                <div className="degreeDetails">
                  <span className="recordCode">
                    {item.code}
                  </span>

                  <h2>{item.degree}</h2>

                  <h3>{item.institute}</h3>
                </div>

              </div>

              {/* LOCATION */}
              <div className="locationInfo">
                <FaMapMarkerAlt />

                <span>{item.location}</span>
              </div>

              <div className="educationDivider"></div>

              {/* ACADEMIC INFORMATION */}
              <div className="timelineInfo">

                <div>
                  <FaUniversity />

                  <section>
                    <small>PERIOD</small>
                    <strong>{item.duration}</strong>
                  </section>
                </div>

                <div>
                  <FaStar />

                  <section>
                    <small>PERFORMANCE</small>
                    <strong>{item.grade}</strong>
                  </section>
                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="descriptionBlock">
                <span>ACADEMIC PROFILE</span>

                <p className="description">
                  {item.description}
                </p>
              </div>

              {/* STATUS */}
              <div className="educationStatus">

                <FaCheckCircle />

                <div>
                  <small>RECORD STATUS</small>
                  <strong>{item.status}</strong>
                </div>

              </div>

              {/* FOOTER */}
              <div className="cardFooter">
                <span>
                  AEGIS ARCHIVE // RECORD{" "}
                  {String(index + 1).padStart(3, "0")}
                </span>

                <span>VERIFIED</span>
              </div>

            </div>
          </article>
        ))}

      </div>
    </section>
  );
}
