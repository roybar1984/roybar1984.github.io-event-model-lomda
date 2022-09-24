import React, { useState, useEffect } from "react";
import "./BackgroundExamples.css";
import OpeningEventsExamples from "./../openingEventsExamples/OpeningEventsExamples";
import { gsap } from "gsap";

function BackgroundExamples(props) {
  useEffect(() => {
    setTimeout(function () {
      props.setIsHidden((prevState) => {
        prevState = "";
      });
    }, props.wait);
  }, []);

  const changeBorder = () => {
    props.setDidOpenAll((prevState) => prevState + 1);
    gsap.to(`.number${props.part}`, {
      ease: "sine",
      duration: 0.2,
      boxShadow: "rgb(151 225 135) 0px 0px 14px 2px inset",
    });
  };

  return (
    <div
      className={`background-examples number${props.part} ${props.isHidden}`}
    >
      {props.isHidden && <div className="black-div"></div>}
      <OpeningEventsExamples part={props.part} changeBorder={changeBorder} />
    </div>
  );
}

export default BackgroundExamples;
