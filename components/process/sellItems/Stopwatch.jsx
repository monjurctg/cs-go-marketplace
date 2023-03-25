import React, {useEffect, useState} from "react";
import {useRef} from "react";

let formatTime = (time) => {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time - min * 60);
  if (min <= 10) min = "0" + min;
  if (sec <= 10) sec = "0" + sec;
  return (
    <>
      <span>{min}:</span>
      <span>{sec}</span>
    </>
  );
};

function Stopwatch({countTime}) {
  const [time, setTime] = useState(countTime);
  const [running, setRunning] = useState(true);
  const timerId = useRef();

  // useEffect(() => {
  //   let interval;
  //   if (running) {
  //     interval = setInterval(() => {
  //       setTime((prevTime) => prevTime - 10);
  //     }, 10);
  //   } else if (!running) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [running]);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);
  useEffect(() => {
    if (time <= 0) {
      clearInterval(timerId.current);
    }
  }, [time]);

  return <h2>{formatTime(time)}</h2>;
}

export default Stopwatch;
