import React, { useEffect, useState } from "react";
import "./EventsExamples.css";
import Console from "../console/Console";
import { gsap } from "gsap";

function EventsExamples(props) {
  const [inputValue, setInputValue] = useState("");
  const [actionsArray, setActionsArray] = useState([]);
  const [numOfRepeat, setNumOfRepeat] = useState(0);
  const [numOfRepeatArray, setNumOfRepeatArray] = useState([]);
  const [isUp, setIsUp] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const styles = [
    {
      width: "29vw",
      height: "25vh",
      bottom: "22%",
    },
    {
      width: "29vw",
      height: "35vh",
      bottom: "31%",
    },
  ];

  useEffect(() => {
    setActionsArray([]);
    setNumOfRepeatArray([]);
    setNumOfRepeat(0);
    setInputValue("");
    setIsUp(false);
    setIsDown(false);
  }, [props.page]);

  const handelMouseDown = () => {
    if (props.page === 5) {
      setActionsArray((prevState) => [
        ...prevState,
        '<p class="console-text mousedown-color">mousedown</p>',
      ]);
      setIsDown(true);
      setIsUp(false);
    }
  };

  const handelhover = () => {
    if (props.page === 6) {
      setActionsArray((prevState) => [
        ...prevState,
        '<p class="console-text mousedown-color">mouseover</p>',
      ]);
    }
  };

  const handleMove = () => {
    if (props.page === 6) {
      setNumOfRepeat((prevState) => {
        if (prevState === 0) {
          setActionsArray((prevState) => [
            ...prevState,
            `<p class="console-text mouseup-color">mousemove</p>`,
          ]);
        }
        return prevState + 1;
      });
    }
  };

  const handleout = () => {
    if (props.page === 6) {
      setActionsArray((prevState) => [
        ...prevState,
        '<p class="console-text click-color">mouseout</p>',
      ]);
      setNumOfRepeatArray((prevState) => [...prevState, numOfRepeat]);
      setNumOfRepeat(0);
    }
  };

  const onTrashClick = () => {
    setActionsArray([]);
    setNumOfRepeatArray([]);
    setNumOfRepeat(0);
    setInputValue("");
    gsap.to(".checkbox", {
      ease: "sine",
      duration: 0.4,
      backgroundColor: "rgba(255, 255, 254, 0)",
    });
  };

  const handelMouseUp = () => {
    if (props.page === 5) {
      setIsDown(false);
      setIsUp(true);
      setActionsArray((prevState) => [
        ...prevState,
        // '<p class="console-text mouseup-color">mouseup    click</p>',
        '<div class="up-and-click-div"><p class="console-text mouseup-color">mouseup</p><p class="console-text click-color">    click</p></div>',
        '<hr class="console-hr" />',
      ]);
    }
  };

  const handleCheckBox = (event) => {
    if (
      actionsArray[actionsArray.length - 1] ===
      '<p class="console-text">שינית את הקלט של תיבת הטקסט</p>'
    ) {
      setNumOfRepeatArray((prevState) => [...prevState, numOfRepeat]);
      setNumOfRepeat(0);
    }
    setNumOfRepeat((prevState) => {
      if (prevState === 0) {
        setActionsArray((prevState) => [
          ...prevState,
          '<p class="console-text">שינית את הקלט של ה-checkbox</p>',
        ]);
      }
      return prevState + 1;
    });
    if (
      event.target.style.background === "rgba(255, 255, 254, 0)" ||
      event.target.style.background === ""
    ) {
      event.target.style.background = "#f3f3f3";
    } else {
      event.target.style.background = "rgba(255, 255, 254, 0)";
    }
  };

  const handelChange = (event) => {
    setInputValue(event.target.value);
    if (
      actionsArray[actionsArray.length - 1] ===
      '<p class="console-text">שינית את הקלט של ה-checkbox</p>'
    ) {
      setNumOfRepeatArray((prevState) => [...prevState, numOfRepeat]);
      setNumOfRepeat(0);
    }
    setNumOfRepeat((prevState) => {
      if (prevState === 0) {
        setActionsArray((prevState) => [
          ...prevState,
          '<p class="console-text">שינית את הקלט של תיבת הטקסט</p>',
        ]);
      }
      return prevState + 1;
    });
  };

  function handleTrashOver(event) {
    gsap.to(".trash-bottom", 0, {
      fill: " url(#linear-trash-hover-gradient-3)",
      ease: "sine",
      duration: 0.45,
    });
    gsap.to(".trash-top", 0, { fill: "#97e187", ease: "sine", duration: 0.45 });
    gsap.to(".trash-circle", 0, {
      stroke: " url(#linear-trash-hover-gradient-3)",
      ease: "sine",
      duration: 0.45,
    });
  }

  function handleTrashLeave(event) {
    gsap.to(".trash-bottom", 0, {
      fill: " url(#linear-trash-gradient-2)",
      ease: "sine",
      duration: 0.45,
    });
    gsap.to(".trash-top", 0, { fill: "#5cb8d1", ease: "sine", duration: 0.45 });
    gsap.to(".trash-circle", 0, {
      stroke: " url(#linear-trash-gradient)",
      ease: "sine",
      duration: 0.45,
    });
  }

  return (
    <div className="event-examples">
      {props.page === 7 ? (
        <div className="input-examples">
          <input
            className="input-text-example"
            value={inputValue}
            onChange={handelChange}
            placeholder="הקלידו את שמכם"
          />
          <p className="pick-color-text">צבע או צבעים אהובים?</p>
          <div className="checkbox-container">
            <div className="single-input-color-choice-container">
              <svg viewBox="0 0 45.29 45.29" className="small-rhom">
                <g id="Layer_2" data-name="Layer 2">
                  <foreignObject
                    className="red-small-rhom"
                    x="6.63"
                    y="6.63"
                    width="32.02"
                    height="32.02"
                    transform="translate(-9.38 22.64) rotate(-45)"
                  ></foreignObject>
                </g>
              </svg>
              <div className="checkbox" onClick={handleCheckBox}></div>

            </div>

            <div className="single-input-color-choice-container">
              <svg viewBox="0 0 45.29 45.29" className="small-rhom">
                <g id="Layer_2" data-name="Layer 2">
                  <foreignObject
                    className="blue-small-rhom"
                    x="6.63"
                    y="6.63"
                    width="32.02"
                    height="32.02"
                    transform="translate(-9.38 22.64) rotate(-45)"
                  ></foreignObject>
                </g>
              </svg>
              <div className="checkbox" onClick={handleCheckBox}></div>
            </div>
            <div className="single-input-color-choice-container">
              <svg viewBox="0 0 45.29 45.29" className="small-rhom">
                <g id="Layer_2" data-name="Layer 2">
                  <foreignObject
                    className="yellow-small-rhom"
                    x="6.63"
                    y="6.63"
                    width="32.02"
                    height="32.02"
                    transform="translate(-9.38 22.64) rotate(-45)"
                  ></foreignObject>
                </g>
              </svg>
              <div  onClick={handleCheckBox} className="checkbox"></div>
            </div>
          </div>
        </div>
      ) : (
        <svg viewBox="0 0 152.66 152.66" className="exampls-ball ">
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
            className={props.page === 5 ? "btns" : ""}
            onMouseUp={handelMouseUp}
            onMouseDown={handelMouseDown}
            onMouseEnter={handelhover}
            onMouseLeave={handleout}
            onMouseMove={handleMove}
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
                {props.page === 5 ? "לחצו עליי" : "עברו מעליי"}
              </text>
            </g>
          </g>
        </svg>
      )}

      {props.page === 5 && (
        <div className="scales-conteiner">
          <div className="click scale">
            <div
              className={`scale-color color-of-click ${
                isUp ? "call-click-animation-up" : ""
              } ${isDown ? "call-click-animation-down" : ""}`}
              style={{ width: `0%` }}
            ></div>
            <span className="click-text">click</span>
          </div>
          <div className="mouse-down scale">
            <div
              className={`scale-color color-of-mousedown ${
                isUp ? "clear-mousedown-animation" : ""
              } 
              ${isDown ? "add-mousedown-animation" : ""}`}
              style={{ width: `0%` }}
            ></div>
            <span className="click-text">mousedown</span>
          </div>
          <div className="mouse-up scale">
            <div
              className={`scale-color color-of-mouseup ${
                isUp ? "add-mouseup-animation" : ""
              }`}
              style={{ width: `0%` }}
            ></div>
            <span className="click-text">mouseup</span>
          </div>
        </div>
      )}

      <div
        className="console-div"
        style={{
          height: props.page === 5 ? styles[0].height : styles[1].height,
        }}
      >
        <Console
          actionsArray={actionsArray}
          setActionsArray={setActionsArray}
          numOfRepeat={numOfRepeat}
          numOfRepeatArray={numOfRepeatArray}
          width={props.page === 5 ? styles[0].width : styles[1].width}
          height={props.page === 5 ? styles[0].height : styles[1].height}
        />
        <svg
          viewBox="0 0 49.34 49.34"
          className="teash btns"
          style={{
            bottom: `${props.page === 5 ? styles[0].bottom : styles[1].bottom}`,
          }}
          onClick={onTrashClick}
          onMouseOver={handleTrashOver}
          onMouseLeave={handleTrashLeave}
        >
          <defs>
            <linearGradient
              id="linear-trash-gradient"
              x1="-1336.12"
              y1="1317.09"
              x2="-1286.79"
              y2="1317.09"
              gradientTransform="translate(1426.26 1245.4) rotate(86.18)"
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
              id="linear-trash-gradient-2"
              x1="24.67"
              y1="20.13"
              x2="24.67"
              y2="39"
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
              id="linear-trash-hover-gradient-3"
              x1="24.67"
              y1="20.13"
              x2="24.67"
              y2="39"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="9%" stopColor="rgba(151,225,135,1)" />
              <stop offset="30%" stopColor="rgba(251,210,92,1)" />
              <stop offset="95%" stopColor="rgba(187,55,254,1)" />
            </linearGradient>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="elements">
              <circle
                className="trash-circle"
                cx="24.67"
                cy="24.67"
                r="24.02"
              />
              <path
                className="trash-top"
                d="M35.09,18.45a.83.83,0,0,0,.78-1.14A5.32,5.32,0,0,0,30.94,14h-1a4.47,4.47,0,0,0-4.35-3.64H23.77A4.46,4.46,0,0,0,19.43,14h-1a5.33,5.33,0,0,0-4.94,3.34.84.84,0,0,0,.79,1.14ZM23.77,12h1.79a2.76,2.76,0,0,1,2.62,2h-7A2.76,2.76,0,0,1,23.77,12Z"
              />
              <path
                className="trash-bottom"
                d="M16.55,36.66A2.53,2.53,0,0,0,19.07,39h11.2a2.53,2.53,0,0,0,2.52-2.34L34,20.13H15.38ZM27,24.63a.84.84,0,1,1,1.67.08l-.44,9a.85.85,0,0,1-.84.8.84.84,0,0,1-.84-.88Zm-5.48-.8a.84.84,0,0,1,.88.8l.45,9a.84.84,0,0,1-1.68.08l-.45-9a.85.85,0,0,1,.8-.88Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default EventsExamples;
