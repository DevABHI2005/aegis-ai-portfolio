
import { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";

function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    let count = 0;
    let finishTimeout;

    const timer = setInterval(() => {
      count++;

      setProgress(count);

      if (count >= 100) {
        clearInterval(timer);

        finishTimeout = setTimeout(() => {
          onFinishRef.current?.();
        }, 700);
      }
    }, 35);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-box">
        <h2>POWER RESTORED</h2>

        <p>Initializing AI Core...</p>
        <p>Loading Navigation...</p>
        <p>Loading Candidate Profile...</p>
        <p>Loading Intelligence Database...</p>

        <br />

        <h1>{progress}%</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
