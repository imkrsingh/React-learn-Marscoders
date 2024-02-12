import React from "react";
import Styles from "../css/LearnCSSModule.module.css";

const LearnCSSModule = () => {
  return (
    <>
      <p className={`${Styles.text_size} ${Styles.text_color}`}>This is React Style</p>
      <h1 style={{ color: 'green', backgroundColor: "pink" }}>Hi, Good Morning</h1>
    </>
  );
};

export const Headers = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};

export default LearnCSSModule;
