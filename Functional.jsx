import React, { useState } from "react";
import ClassComponent from "./ClassComponent";

const FunctionalComponent = (props) => {
  const [currentDate, setCurrentdate] = useState(props.date);
  const [currentTime, setCurrentTime] = useState(props.time);

  const fetchDate = () => {
    setCurrentdate(new Date().toLocaleDateString());
  };

  const fetchTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <h1>Functional Component</h1>
      <button onClick={fetchDate}>Get Today's Date</button>
      <button onClick={fetchTime}>Get Today's Time</button>
      <p>Date: {currentDate}</p>
      <p>Time: {currentTime}</p>
      <ClassComponent date={currentDate} time={currentTime} />
    </div>
  );
};

export default FunctionalComponent;
