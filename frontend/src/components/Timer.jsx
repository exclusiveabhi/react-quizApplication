import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(interval);
      alert("Time is up! The quiz will be submitted.");
      window.location.href = "/result";
    }

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <h3>Time Remaining: {formatTime(time)}</h3>
    </div>
  );
};

export default Timer;