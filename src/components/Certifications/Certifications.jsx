
import "./Certifications.css";

import {
  FaAws,
  FaRedhat,
  FaSalesforce,
  FaCertificate,
  FaNetworkWired,
  FaLanguage,
  FaExternalLinkAlt,
  FaDownload,
  FaCheckCircle,
  FaShieldAlt,
  FaExclamationCircle
} from "react-icons/fa";

const certifications = [
  {
    id: "01",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "April 30, 2024",
    validity: "Valid until April 30, 2027",
    category: "CLOUD SYSTEMS",
    status: "VALID",
    icon: <FaAws />,
    pdf: "/certificates/AWS%20Cloud%20Practitioner.pdf",
    verify: "https://aws.amazon.com/verification",
    description:
      "Foundational AWS certification covering cloud concepts, core AWS services, security and cloud architecture."
  },
  {
    id: "02",
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle University",
    date: "July 31, 2024",
    validity: "Expired July 31, 2026",
    category: "GENERATIVE AI",
    status: "EXPIRED",
    icon: <FaCertificate />,
    pdf: "/certificates/Oracle%20Cloud%20Infrastructure.pdf",
    verify: null,
    description:
      "Professional certification focused on Generative AI capabilities within Oracle Cloud Infrastructure."
  },
  {
    id: "03",
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    date: "November 7, 2024",
    validity: "Certified",
    category: "DEVELOPMENT SYSTEMS",
    status: "ON RECORD",
    icon: <FaRedhat />,
    pdf: "	/certificates/RedHat%20Enterprise%20application.pdf",
    verify:
      "https://www.credly.com/badges/bf275d50-3845-4755-924b-c5ded5f72a9b",
    description:
      "Professional certification demonstrating enterprise application development capabilities."
  },
  {
    id: "04",
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    date: "October 26, 2024",
    validity: "Certified",
    category: "ARTIFICIAL INTELLIGENCE",
    status: "ON RECORD",
    icon: <FaSalesforce />,
    pdf: "	/certificates/Salesforce%20AI%20Associate.pdf",
    verify: "https://sforce.co/verifycerts",
    description:
      "Certification recognizing foundational knowledge and understanding of artificial intelligence in the Salesforce ecosystem."
  },
  {
    id: "05",
    title: "IELTS",
    issuer: "IELTS",
    date: "Certificate details pending",
    validity: "Overall Band 7",
    category: "ENGLISH LANGUAGE",
    status: "ON RECORD",
    icon: <FaLanguage />,
    pdf: null,
    verify: null,
    metaLabel: "RESULT",
    description:
      "English language proficiency assessment with an overall IELTS band score of 7."
  },
  {
    id: "06",
    title: "Aviatrix Certified Engineer",
    issuer: "Aviatrix",
    date: "December 16, 2025",
    validity: "Valid until December 16, 2028",
    category: "MULTICLOUD NETWORKING",
    status: "VALID",
    icon: <FaNetworkWired />,
    pdf: "/certificates/Multicloud%20Network%20Associate.pdf",
    verify: null,
    description:
      "Multicloud networking certification covering networking across AWS, Azure, Google Cloud and Oracle Cloud Infrastructure."
  }
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="certHeader">
        <p className="systemLabel">
          STARK INDUSTRIES // CREDENTIAL VAULT
        </p>

        <h1>CERTIFICATIONS</h1>

        <p className="certSubtitle">
          Technical credentials and professional achievements.
        </p>
      </div>

      <div className="vaultStatus">
        <span className="vaultDot"></span>
        <span>STARK SECURITY NETWORK</span>

        <strong>
          {String(certifications.length).padStart(2, "0")} RECORDS ON FILE
        </strong>
      </div>

      <div className="certGrid">
        {certifications.map((cert) => (
          <article
            className={`certCard ${cert.status === "EXPIRED" ? "expiredCard" : ""}`}
            key={cert.id}
          >
            <div className="hudCorner topLeft"></div>
            <div className="hudCorner topRight"></div>
            <div className="hudCorner bottomLeft"></div>
            <div className="hudCorner bottomRight"></div>

            <div className="scanLine"></div>

            <div className="certTop">
              <span className="certNumber">
                CREDENTIAL // {cert.id}
              </span>

              <span
                className={`verified ${
                  cert.status === "EXPIRED" ? "expiredStatus" : ""
                }`}
              >
                {cert.status === "EXPIRED" ? (
                  <FaExclamationCircle />
                ) : (
                  <FaCheckCircle />
                )}
                {cert.status}
              </span>
            </div>

            <div className="certIcon">
              <div className="reactorRing"></div>
              <div className="reactorCore"></div>

              <div className="certIconSymbol">
                {cert.icon}
              </div>
            </div>

            <span className="certCategory">
              {cert.category}
            </span>

            <h2>{cert.title}</h2>

            <p className="issuer">{cert.issuer}</p>

            <div className="certMeta">
              <div>
                <span>{cert.metaLabel || "ISSUED"}</span>
                <strong>{cert.date}</strong>
              </div>

              <div>
                <span>{cert.metaLabel ? "SCORE" : "STATUS"}</span>
                <strong>{cert.validity}</strong>
              </div>
            </div>

            <p className="certDescription">
              {cert.description}
            </p>

            {(cert.pdf || cert.verify) && (
              <div className="certActions">
                {cert.pdf && (
                  <>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certButton primary"
                    >
                      <FaExternalLinkAlt />
                      VIEW CREDENTIAL
                    </a>

                    <a
                      href={cert.pdf}
                      download
                      className="certButton"
                    >
                      <FaDownload />
                      DOWNLOAD
                    </a>
                  </>
                )}

                {cert.verify && (
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verifyLink"
                  >
                    <FaShieldAlt />
                    VERIFY CREDENTIAL
                    <span>→</span>
                  </a>
                )}
              </div>
            )}

            {!cert.pdf && !cert.verify && (
              <div className="certPending">
                CERTIFICATE DOCUMENT NOT LINKED
              </div>
            )}

            <div className="cardFooter">
              <span>STARK SYSTEMS</span>
              <span>SECURE // CREDENTIAL ARCHIVE</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
