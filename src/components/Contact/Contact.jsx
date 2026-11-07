
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCircle,
  FaBolt,
  FaPaperPlane,
  FaCopy,
  FaCheck
} from "react-icons/fa";

const EMAIL = "babhiram1947@gmail.com";

function Contact() {
  const [sending, setSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setMessageStatus("Email service configuration is pending.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      to_email: EMAIL
    };

    try {
      setSending(true);
      setMessageStatus("");

      await emailjs.send(
  serviceId,
  templateId,
  templateParams,
  {
    publicKey: publicKey
  }
);

      setMessageStatus("Message transmitted successfully.");
      form.reset();
    } catch (error) {
  console.error("EmailJS Error:", error);
  console.error("Error status:", error.status);
  console.error("Error text:", error.text);

  setMessageStatus(
    "Transmission failed. Please try emailing directly."
  );
} finally {
  setSending(false);
}
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setMessageStatus("Unable to copy email. Please copy it manually.");
    }
  };

  return (
    <section className="contactSection" id="contact">
      {/* HEADER */}
      <div className="contactHeader">
        <p className="contactLabel">
          STARK INDUSTRIES // COMMUNICATION TERMINAL
        </p>

        <h1>ESTABLISH CONNECTION</h1>

        <p className="contactSubtitle">
          Initiate a communication channel for opportunities,
          collaborations and technical discussions.
        </p>
      </div>

      {/* SYSTEM STATUS */}
      <div className="contactSystemBar">
        <div className="systemIndicator">
          <FaCircle />
          JARVIS ONLINE
        </div>

        <div className="systemLine"></div>

        <div className="systemIndicator">
          <FaBolt />
          SECURE CHANNEL
        </div>
      </div>

      <div className="contactContainer">
        {/* LEFT PANEL */}
        <div className="contactInfo">
          <div className="terminalHeader">
            <span>TRANSMISSION STATUS</span>

            <div className="onlineStatus">
              <FaCircle />
              AVAILABLE
            </div>
          </div>

          <h2>
            Ready for the
            <span> next mission.</span>
          </h2>

          <p>
            Whether you're a recruiter, developer or someone
            interested in building something useful, let's
            connect and explore opportunities.
          </p>

          {/* ARC REACTOR */}
          <div className="reactorContainer">
            <div className="reactorOuter">
              <div className="reactorRing ringOne"></div>
              <div className="reactorRing ringTwo"></div>
              <div className="reactorCore"></div>

              <div className="reactorBolt">
                <FaBolt />
              </div>
            </div>

            <div className="reactorText">
              <span>ARC REACTOR</span>
              <strong>ONLINE</strong>
            </div>
          </div>

          {/* LOCATION */}
          <div className="location">
            <FaMapMarkerAlt />

            <div>
              <span>CURRENT LOCATION</span>
              <strong>Hyderabad, India</strong>
            </div>
          </div>

          {/* EMAIL COPY */}
          <button
            type="button"
            className="copyEmailButton"
            onClick={handleCopyEmail}
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? "EMAIL COPIED" : EMAIL}
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="contactActions">
          <div className="terminalLabel">
            SEND A TRANSMISSION
          </div>

          {/* CONTACT FORM */}
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="contactName">YOUR NAME</label>
              <input
                id="contactName"
                name="from_name"
                type="text"
                placeholder="Enter your name"
                maxLength="100"
                autoComplete="name"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="contactEmail">EMAIL ADDRESS</label>
              <input
                id="contactEmail"
                name="from_email"
                type="email"
                placeholder="you@example.com"
                maxLength="150"
                autoComplete="email"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="contactSubject">SUBJECT</label>
              <input
                id="contactSubject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                maxLength="150"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="contactMessage">MESSAGE</label>
              <textarea
                id="contactMessage"
                name="message"
                rows="5"
                placeholder="Write your message..."
                maxLength="3000"
                required
              />
            </div>

            <button
              type="submit"
              className="sendMessageButton"
              disabled={sending}
            >
              <FaPaperPlane />
              {sending ? "TRANSMITTING..." : "SEND MESSAGE"}
            </button>

            {messageStatus && (
              <p
                className="formStatus"
                role="status"
                aria-live="polite"
              >
                {messageStatus}
              </p>
            )}
          </form>

          {/* ALTERNATIVE CHANNELS */}
          <div className="alternativeChannels">
            <div className="terminalLabel">
              ALTERNATIVE CHANNELS
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="contactCard"
            >
              <div className="contactIcon">
                <FaEnvelope />
              </div>

              <div>
                <span>PRIMARY CHANNEL</span>
                <strong>Send me an email</strong>
              </div>

              <FaArrowRight className="arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/abhiram1562/"
              target="_blank"
              rel="noopener noreferrer"
              className="contactCard"
            >
              <div className="contactIcon">
                <FaLinkedin />
              </div>

              <div>
                <span>PROFESSIONAL NETWORK</span>
                <strong>Connect on LinkedIn</strong>
              </div>

              <FaArrowRight className="arrow" />
            </a>

            <a
              href="https://github.com/DevABHI2005"
              target="_blank"
              rel="noopener noreferrer"
              className="contactCard"
            >
              <div className="contactIcon">
                <FaGithub />
              </div>

              <div>
                <span>CODE REPOSITORY</span>
                <strong>Explore my GitHub</strong>
              </div>

              <FaArrowRight className="arrow" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="contactCard"
            >
              <div className="contactIcon">
                <FaFileDownload />
              </div>

              <div>
                <span>PERSONNEL FILE</span>
                <strong>Download my resume</strong>
              </div>

              <FaArrowRight className="arrow" />
            </a>
          </div>

          <div className="terminalFooter">
            <FaCircle />
            COMMUNICATION INTERFACE READY
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
