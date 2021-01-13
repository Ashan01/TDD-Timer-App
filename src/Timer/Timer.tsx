import React, { useState } from "react";
import "./Timer.css";

const Timer = () => {
   let [min, setMin] = useState(0);
   let [sec, setSec] = useState(0);
   let [msec, setMsec] = useState(0);
   var interval: any = null;

   function SetTimer() {
      setMsec(++msec);
      if (msec >= 100) {
         setSec((sec += 1));
         setMsec((msec = 0));
      } else if (sec >= 60) {
         setMin((min += 1));
         setSec((sec = 0));
      }
   }
   function start() {
      interval = setInterval(SetTimer, 10);

      console.log(interval);
   }
   console.log(interval);
   function stop() {
      clearInterval(SetTimer);
   }

   function reset() {
      setMin(0);
      setSec(0);
      setMsec(0);
   }
   return (
      <div>
         <div className="timer">
            <h1>min {min}</h1>
            <h1> sec {sec}</h1>
            <h1>msec {msec}</h1>
         </div>
         <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
         </div>
      </div>
   );
};
export default Timer;
