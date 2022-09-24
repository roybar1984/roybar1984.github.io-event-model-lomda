import React, { useState, useEffect, useRef } from "react";
import "./OpeningEventsExamples.css";
import { gsap, TweenMax } from "gsap";

function OpeningEventsExamples(props) {
  const [value, setValue] = useState("");
  const [clickNum, setClickNum] = useState(1);
  const [isUsed, setIsUsed] = useState(false);
  const [currDarkClass, setCurrDarkClass] = useState("dark-back1");
  const [currMiddleClass, setCurrMiddleClass] = useState("middle-back1");
  const [currLightClass, setCurrLightClass] = useState("light-back1");
  const bigRhomColore = [
    "(150deg, rgba(92,184,209,1) 5%, rgba(139,151,226,1) 12%, rgba(175,125,239,1) 34%, rgba(223,92,255,1) 49%, rgba(235,66,184,1) 69%, rgba(245,44,124,1) 88%, rgba(255,23,68,1) 97%)",
    "(154deg,  rgba(118,74,212,1) 5%, rgba(145,89,225,1) 12%, rgba(180,107,242,1) 34%, rgba(206,121,255,1) 49%, rgba(217,131,246,1) 69%, rgba(228,141,236,1) 88%, rgba(255,166,212,1) 97%)",
    "(150deg,rgba(251,210,92,1) 0%, rgba(251,174,105,1) 20%, rgba(251,152,113,1) 30%, rgba(251,119,125,1) 44%,rgba(249,123,162,1) 74%,rgba(247,126,197,1) 85%, rgba(243,132,255,1) 100%)",
    "(150deg, rgba(255,205,69,1) 0%, rgba(245,168,130,1) 16%, rgba(237,142,173,1) 36%, rgba(223,92,255,1) 52%, rgba(190,79,213,1) 67%, rgba(161,68,176,1) 90%, rgba(140,60,150,1) 100%)",
  ];
  const bigRhomRef = useRef(null);

  const handelChange = (event) => {
    setValue(event.target.value);
    setIsUsed(true);
  };

  const handleClick = (event) => {
    setIsUsed(true);
    if (clickNum === 4) {
      setClickNum(1);
    } else {
      setClickNum((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (isUsed) {
      props.changeBorder();
    }
  }, [isUsed]);

  useEffect(() => {
    TweenMax.to(".dark-animation", 3, {y: -15 , delay:0.2, repeat: -1, yoyo: true, duration:0.2});
    TweenMax.to(".middle-animation", 3, {y: 4, delay:1.5, repeat: -1, yoyo: true, duration:0.4});
    TweenMax.to(".light-animation", 3, {y: -3, delay:0.8, repeat: -1, yoyo: true, duration:0.5});
  }, []);

  useEffect(() => {
    gsap.to(bigRhomRef.current, {
      ease: "sine",
      duration: 0.5,
      background: `linear-gradient${bigRhomColore[clickNum - 1]}`,
    });
    setCurrLightClass("light-back" + clickNum);
    setCurrMiddleClass("middle-back" + clickNum);
    setCurrDarkClass("dark-back" + clickNum);
  }, [clickNum]);

  return (
    <div>
      {props.part === "1" ? (
        <div>
          <div className="text-input">{value}</div>
          <input
            className="input-gradient"
            value={value}
            onChange={handelChange}
            placeholder="הקלידו כאן"
          />
        </div>
      ) : props.part === "2" ? (
        <svg
          viewBox="0 0 225.41 330.52"
          className="rhombus"
          onClick={handleClick}
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="elements">
              <g className=" btns">
                <foreignObject
                  x="45.87"
                  y="110.65"
                  width="136.88"
                  height="136.88"
                  ref={bigRhomRef}
                  className="big-rhom "
                  transform="translate(-87.01 124.11) rotate(-45)"
                ></foreignObject>
                <text className="event-text"  transform="translate(80.71 177.86)"> לחצו עליי</text>
              </g>
              <rect
                className={`create-transition middle-animation ${currMiddleClass}`}
                x="7.04"
                y="44.27"
                width="34"
                height="34"
                transform="translate(-36.28 34.94) rotate(-45)"
              />
              <rect
                className={`create-transition light-animation ${currLightClass}`}
                x="184.37"
                y="257.41"
                width="34"
                height="34"
                transform="translate(-135.06 222.76) rotate(-45)"
              />
              <rect
                className={`create-transition light-animation ${currLightClass}`}
                x="13.09"
                y="13.59"
                width="17.35"
                height="17.35"
                transform="translate(-2.3 18.98) rotate(-45)"
              />
              <rect
                className={`create-transition dark-animation ${currDarkClass}`}
                x="175.22"
                y="22.86"
                width="23.32"
                height="23.32"
                transform="translate(78.44 -122.33) rotate(45)"
              />
              <rect
                className={`create-transition dark-animation ${currDarkClass}`}
                x="169.04"
                y="302.15"
                width="23.5"
                height="23.5"
                transform="translate(274.91 -35.9) rotate(45)"
              />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          viewBox="0 0 209.32 209.32"
          className="circle-svg"
          onMouseOver={() => setIsUsed(true)}
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="37.39"
              y1="184.84"
              x2="171.94"
              y2="24.48"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.08" stopColor="#5cb8d1" />
              <stop offset="0.1" stopColor="#65b1d4" />
              <stop offset="0.22" stopColor="#998de7" />
              <stop offset="0.33" stopColor="#bf72f4" />
              <stop offset="0.41" stopColor="#d662fc" />
              <stop offset="0.47" stopColor="#df5cff" />
              <stop offset="0.76" stopColor="#f2328e" />
              <stop offset="0.96" stopColor="#ff1744" />
            </linearGradient>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="elements">
              <path
                className="circle"
                d="M104.67,0A104.66,104.66,0,1,0,209.32,104.67,104.67,104.67,0,0,0,104.67,0Zm0,188.74a84.08,84.08,0,1,1,84.07-84.07A84.07,84.07,0,0,1,104.67,188.74Z"
              />
            </g>
            <g id="text">
              <text className="event-text" transform="translate(60.46 108.44)">
                עברו מעליי
              </text>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}

export default OpeningEventsExamples;
