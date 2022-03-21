import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return <div>{seconds} second/s</div>;
};

export default Timer;
