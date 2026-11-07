
import { useState, useEffect, useRef } from "react";
import "./Loader.css";

const messages = [
  "Initializing AEGIS AI...",
  "Loading Neural Network...",
  "Connecting Satellites...",
  "Scanning Projects...",
  "Loading Skills Database...",
  "System Online..."
];

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(messages[0]);

  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    let count = 0;
    let finishTimeout;

    const interval = setInterval(() => {
      count++;

      setProgress(count);

      if (count < 20) {
        setMessage(messages[0]);
      } else if (count < 40) {
        setMessage(messages[1]);
      } else if (count < 60) {
        setMessage(messages[2]);
      } else if (count < 80) {
        setMessage(messages[3]);
      } else if (count < 99) {
        setMessage(messages[4]);
      } else {
        setMessage(messages[5]);
      }

      if (count >= 100) {
        clearInterval(interval);

        finishTimeout = setTimeout(() => {
          onFinishRef.current?.();
        }, 800);
      }
    }, 35);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimeout);
    };
  }, []);

  return (
    <div className="loader">
      <div className="loader-content">
        <h1>AEGIS AI</h1>

        <h3>{message}</h3>

        <div className="bar">
          <div
            className="fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2>{progress}%</h2>
      </div>
    </div>
  );
}

export default Loader;
