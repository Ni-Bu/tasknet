import React, { useState, useEffect } from "react";
import moment from "moment";

function Greeting() {
  return (
    <>
      <div className="Greeting-box">
        <div className="Greeting-welcomeSentence">What is in your mind?</div>
        <ClockContainer />
      </div>
    </>
  );
}

function ClockContainer() {
  const [time, setTime] = useState(moment()); //set the time value as default
  useEffect(() => {
    let timer = setInterval(() => {
      // save for interval closing
      setTime(moment()); //current time setting
    }, 1000); //1s repeat
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className="Greeting-clock"> {time.format("llll")}</div>;
}
export default Greeting;
