import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion
} from "framer-motion";

import "./Hero.css";

const nameVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045
    }
  }
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function KineticName({ text, className }) {
  return (
    <motion.span
      className={`nameLine ${className}`}
      variants={nameVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      <span className="srOnly">{text}</span>

      <span aria-hidden="true" className="nameLetters">
        {text.split("").map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            className="nameChar"
            variants={letterVariants}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18
  });

  const handleReactorMove = (event) => {
    if (reduceMotion || event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -12);
    rotateY.set(((x - centerX) / centerX) * 12);
  };

  const resetReactor = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section id="home" className="hero">

      <div className="heroGrid" aria-hidden="true" />
      <div className="heroAmbient heroAmbientOne" aria-hidden="true" />
      <div className="heroAmbient heroAmbientTwo" aria-hidden="true" />
      <div className="heroVignette" aria-hidden="true" />

      {/* Left HUD */}
      <motion.div
        className="hud hudLeft"
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <span>AEGIS CORE</span>
        <strong>ONLINE</strong>
        <small>POWER SYSTEM: 98%</small>
        <div className="hudMeter"><span /></div>
      </motion.div>

      {/* Right HUD */}
      <motion.div
        className="hud hudRight"
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <span>PROTOCOL</span>
        <strong>MARK-01</strong>
        <small>SECURITY: ACTIVE</small>
        <div className="hudCoordinates">
          17.3850° N / 78.4867° E
        </div>
      </motion.div>

      <div className="heroContent">

        <motion.div
          className="systemLabel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="statusDot" />
          AEGIS INTELLIGENCE SYSTEM
          <span className="systemLabelLine" />
        </motion.div>

        {/* Interactive reactor */}
        <motion.div
          className="reactor"
          onPointerMove={handleReactorMove}
          onPointerLeave={resetReactor}
          style={{
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            transformPerspective: 900
          }}
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          role="img"
          aria-label="Animated AEGIS reactor"
        >
          <div className="reactorOrbit orbitOne" />
          <div className="reactorOrbit orbitTwo" />

          <div className="reactorRing ringOuter" />
          <div className="reactorRing ringMiddle" />
          <div className="reactorRing ringInner" />

          <div className="reactorTicks">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                style={{ "--tick-index": index }}
              />
            ))}
          </div>

          <div className="reactorCore">
            <div className="coreTriangle" />
          </div>

          <div className="reactorLine line1" />
          <div className="reactorLine line2" />
          <div className="reactorLine line3" />
          <div className="reactorLine line4" />

          <span className="reactorLabel">AEGIS // CORE</span>
        </motion.div>

        <motion.p
          className="heroEyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          PERSONAL INTELLIGENCE SYSTEM
        </motion.p>

        {/* Kinetic typography */}
        <h1 className="heroName">
          <KineticName text="ABHIRAM" />
          <KineticName
            text="BHAIRAVABHOTLA"
            className="gradientName"
          />
        </h1>

        <motion.div
          className="heroRole"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <span>DATA ANALYTICS</span>
          <i />
          <span>DATA ENGINEERING</span>
          <i />
          <span>TECHNOLOGY</span>
        </motion.div>

        <motion.p
          className="heroDescription"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.7 }}
        >
          Computer Science graduate building intelligent systems,
          data-driven applications and practical software solutions.
          Turning information into meaningful insights.
        </motion.p>

        <motion.div
          className="heroActions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
        >
          <a href="#projects" className="primaryButton">
            <span>EXPLORE PROJECTS</span>
            <b aria-hidden="true">↗</b>
          </a>

          <a href="#contact" className="secondaryButton">
            CONTACT AEGIS
          </a>

          <a
            href="https://github.com/DevABHI2005"
            className="githubButton"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom statistics */}
      <motion.div
        className="heroBottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="heroStat">
          <span>LOCATION</span>
          <strong>HYDERABAD, INDIA</strong>
        </div>

        <div className="heroStat">
          <span>SYSTEM STATUS</span>
          <strong className="online"><i /> OPERATIONAL</strong>
        </div>

        <div className="heroStat">
          <span>CORE DIRECTIVE</span>
          <strong>BUILD • ANALYZE • AUTOMATE</strong>
        </div>
      </motion.div>

      <div className="scrollIndicator">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>

      <div className="heroCorner heroCornerLeft">
        AEGIS / 001
      </div>

      <div className="heroCorner heroCornerRight">
        SYSTEM VERSION 1.0
      </div>

    </section>
  );
}