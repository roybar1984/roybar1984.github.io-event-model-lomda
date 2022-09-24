import React, { useEffect, useState, useRef } from "react";
import "./EventListenerExample.css";
import { gsap } from "gsap";

function EventListenerExample(props) {
  const [isListenerOn, setIsListenerOn] = useState(false);
  const [rahmClickNum, setRahmClickNum] = useState(1);
  const [circleClickNum, setCircleClickNum] = useState(0);
  const bigRhomRef = useRef(null);
  const addListenerButtonRef = useRef(null);
  const bigRhomColore = [
    "(150deg, rgba(92,184,209,1) 5%, rgba(139,151,226,1) 12%, rgba(175,125,239,1) 34%, rgba(223,92,255,1) 49%, rgba(235,66,184,1) 69%, rgba(245,44,124,1) 88%, rgba(255,23,68,1) 97%)",
    "(154deg,  rgba(118,74,212,1) 5%, rgba(145,89,225,1) 12%, rgba(180,107,242,1) 34%, rgba(206,121,255,1) 49%, rgba(217,131,246,1) 69%, rgba(228,141,236,1) 88%, rgba(255,166,212,1) 97%)",
    "(150deg,rgba(251,210,92,1) 0%, rgba(251,174,105,1) 20%, rgba(251,152,113,1) 30%, rgba(251,119,125,1) 44%,rgba(249,123,162,1) 74%,rgba(247,126,197,1) 85%, rgba(243,132,255,1) 100%)",
    "(150deg, rgba(255,205,69,1) 0%, rgba(245,168,130,1) 16%, rgba(237,142,173,1) 36%, rgba(223,92,255,1) 52%, rgba(190,79,213,1) 67%, rgba(161,68,176,1) 90%, rgba(140,60,150,1) 100%)",
  ];
  
  const handleClickOnAdd = (event) => {
    setIsListenerOn(true);
    gsap.to(".add-event-listener-line", {
      ease: "sine",
      duration: 0.9,
      opacity: 1,
      display: "block",
      delay: 0.9,
    });
    gsap.to(".description-to-add-listener", {
      ease: "sine",
      duration: 0.7,
      opacity: 0,
      display: "none",
    });
  };

  const handleClickCount = (event) => {
    if (props.page === 11) {
      if (isListenerOn) {
        if (rahmClickNum === 4) {
          setRahmClickNum(1);
        } else {
          setRahmClickNum((prevState) => prevState + 1);
        }
      }
    } else {
      if (circleClickNum === 3) {
        setIsListenerOn(true);
      } else {
        setCircleClickNum((prevState) => prevState + 1);
      }
    }
  };

  const handleRefreshClick = (event) => {
    setIsListenerOn(false);
    if(props.page === 11){
      setRahmClickNum(1);
      gsap.to(".add-event-listener-line", {
        ease: "sine",
        duration: 0.7,
        opacity: 0,
        display: "none",
      });
      gsap.to(".description-to-add-listener", {
        ease: "sine",
        duration: 0.7,
        opacity: 1,
        display: "block",
        delay: 0.9,
      });
    } else {
      setCircleClickNum(0);
    }
  };

  useEffect(() => {
    gsap.to(bigRhomRef.current, {
      ease: "sine",
      duration: 0.5,
      background: `linear-gradient${bigRhomColore[rahmClickNum - 1]}`,
    });
  }, [rahmClickNum]);
  useEffect(() => {
    setIsListenerOn(false);
  }, [props.page]);

  function handleOver(event) {
    gsap.to(".in-refresh", 0, { fill: " url(#linear-refresh-gradient-3)" });
    gsap.to(".refresh-circle", 0, {
      stroke: " url(#linear-refresh-gradient-3)",
    });
  }

  function handleLeave(event) {
    gsap.to(".in-refresh", 0, { fill: " url(#linear-refresh-gradient)" });
    gsap.to(".refresh-circle", 0, {
      stroke: " url(#linear-refresh-gradient-2)",
    });
  }

  return (
    <div>
      {props.page === 13 ? (
        <div className="remove-listener-example">
          <svg
            viewBox="0 0 152.66 152.66"
            className="remove-listener-exampls-ball "
          >
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="71.57"
                cy="85.39"
                fx="-39.58415570029722"
                fy="115.93390435929376"
                r="115.28"
                gradientTransform="translate(149.45 4.12) rotate(83.26) scale(1 1.02)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#5cb8d1" />
                <stop offset="0.04" stopColor="#6cadd7" />
                <stop offset="0.26" stopColor="#be73f4" />
                <stop offset="0.37" stopColor="#df5cff" />
                <stop offset="0.4" stopColor="#e158f5" />
                <stop offset="0.47" stopColor="#e54eda" />
                <stop offset="0.55" stopColor="#ed3eae" />
                <stop offset="0.64" stopColor="#f72873" />
                <stop offset="0.71" stopColor="#ff1744" />
                <stop offset="0.74" stopColor="#e81747" />
                <stop offset="0.87" stopColor="#851755" />
                <stop offset="0.93" stopColor="#5e175b" />
              </radialGradient>
            </defs>
            <g
              id="Layer_2"
              data-name="Layer 2"
              className="btns"
              onClick={handleClickCount}
            >
              <g id="elements">
                <circle
                  className="ball-background"
                  cx="76.33"
                  cy="76.33"
                  r="76.33"
                />
              </g>
              <g id="text">
                <text className="event-text" transform="translate(37.73 81.11)">
                  לחצו עליי
                </text>
              </g>
            </g>
          </svg>
            <svg
              viewBox="0 0 85.59 85.59"
              className="remove-refresh-btn"
              onMouseOut={handleLeave}
              onMouseOver={handleOver}
              onClick={handleRefreshClick}
            >
              <defs>
                <linearGradient
                  id="linear-refresh-gradient"
                  x1="161.81"
                  y1="-588.52"
                  x2="213.27"
                  y2="-588.49"
                  gradientTransform="translate(140.7 652.03) rotate(-26.53)"
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
                <linearGradient
                  id="linear-refresh-gradient-2"
                  x1="-1.24"
                  y1="51.62"
                  x2="84.34"
                  y2="51.55"
                  gradientTransform="translate(-10.93 4.05) rotate(-15.35)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.08" stopColor="#17d2ff" />
                  <stop offset="0.13" stopColor="#25caff" />
                  <stop offset="0.22" stopColor="#49b5ff" />
                  <stop offset="0.35" stopColor="#8492ff" />
                  <stop offset="0.5" stopColor="#d463ff" />
                  <stop offset="0.52" stopColor="#df5cff" />
                  <stop offset="0.78" stopColor="#f2328e" />
                  <stop offset="0.96" stopColor="#ff1744" />
                </linearGradient>
                <linearGradient
                  className="innerPlus"
                  id="linear-refresh-gradient-3"
                  x1="27.48"
                  y1="13.15"
                  x2="27.48"
                  y2="41.81"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="9%" stopColor="rgba(151,225,135,1)" />
                  <stop offset="30%" stopColor="rgba(251,210,92,1)" />
                  <stop offset="95%" stopColor="rgba(187,55,254,1)" />
                </linearGradient>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="elements">
                  <path
                    className="in-refresh"
                    d="M67.94,28.76,66,38.79l-9.18-4.48,4-2a20.08,20.08,0,1,0,.51,19.94l2.79,2a23.47,23.47,0,1,1-.26-23.42Z"
                  />
                  <circle
                    className="refresh-circle"
                    cx="42.8"
                    cy="42.8"
                    r="42.14"
                  />
                </g>
              </g>
            </svg>
            <div className="display-counter">{circleClickNum}</div>
        </div>
      ) : (
        <div className="add-listener-example">
          {isListenerOn ? (
            <svg
              viewBox="0 0 85.59 85.59"
              className="refresh-btn"
              onMouseOut={handleLeave}
              onMouseOver={handleOver}
              onClick={handleRefreshClick}
            >
              <defs>
                <linearGradient
                  id="linear-refresh-gradient"
                  x1="161.81"
                  y1="-588.52"
                  x2="213.27"
                  y2="-588.49"
                  gradientTransform="translate(140.7 652.03) rotate(-26.53)"
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
                <linearGradient
                  id="linear-refresh-gradient-2"
                  x1="-1.24"
                  y1="51.62"
                  x2="84.34"
                  y2="51.55"
                  gradientTransform="translate(-10.93 4.05) rotate(-15.35)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.08" stopColor="#17d2ff" />
                  <stop offset="0.13" stopColor="#25caff" />
                  <stop offset="0.22" stopColor="#49b5ff" />
                  <stop offset="0.35" stopColor="#8492ff" />
                  <stop offset="0.5" stopColor="#d463ff" />
                  <stop offset="0.52" stopColor="#df5cff" />
                  <stop offset="0.78" stopColor="#f2328e" />
                  <stop offset="0.96" stopColor="#ff1744" />
                </linearGradient>
                <linearGradient
                  className="innerPlus"
                  id="linear-refresh-gradient-3"
                  x1="27.48"
                  y1="13.15"
                  x2="27.48"
                  y2="41.81"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="9%" stopColor="rgba(151,225,135,1)" />
                  <stop offset="30%" stopColor="rgba(251,210,92,1)" />
                  <stop offset="95%" stopColor="rgba(187,55,254,1)" />
                </linearGradient>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="elements">
                  <path
                    className="in-refresh"
                    d="M67.94,28.76,66,38.79l-9.18-4.48,4-2a20.08,20.08,0,1,0,.51,19.94l2.79,2a23.47,23.47,0,1,1-.26-23.42Z"
                  />
                  <circle
                    className="refresh-circle"
                    cx="42.8"
                    cy="42.8"
                    r="42.14"
                  />
                </g>
              </g>
            </svg>
          ) : (
            <div
              ref={addListenerButtonRef}
              onClick={handleClickOnAdd}
              className="add-listener-btn btns"
            >
              הוסף מאזין
            </div>
          )}
          <svg
            viewBox="0 0 225.41 330.52"
            className="rhombus-listener"
          >
            <g className={`${isListenerOn && "btns"}`} onClick={handleClickCount}>
              <foreignObject
                ref={bigRhomRef}
                x="37.87"
                y="98.65"
                width="136.88"
                height="136.88"
                className="big-rhom "
                transform="translate(-87.01 124.11) rotate(-45)"
              ></foreignObject>
              <g id="text">
                <text
                  className="event-text"
                  transform="translate(67.71 170.86)"
                >
                  לחצו עליי
                </text>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

export default EventListenerExample;
