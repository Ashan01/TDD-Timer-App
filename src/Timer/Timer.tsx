import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
   let [min, setMin] = useState(0);
   let [sec, setSec] = useState(0);
   let [msec, setMsec] = useState(0);
   let [interval1, saveInterval]: any = useState();

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

   const start = () => {
      let interval = setInterval(SetTimer, 10);
      saveInterval(interval);
   };

   function stop(): any {
      clearInterval(interval1);
   }
   function reset() {
      setMin(0);
      setSec(0);
      setMsec(0);
      clearInterval(interval1);
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
function Timeout(Timeout: any): [any, any] {
   throw new Error("Function not implemented.");
}
