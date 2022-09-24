import "./FirstPage.css";

import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import MeaLogo from "./../meaLogo/MeaLogo";
import ReactDOM from "react-dom";
import { Markup } from "interweave";
import { Draggable } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(Draggable);

function FirstPage(props) {
  const history = useHistory();
  const dropRef = useRef(null);
  const dragRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    props.setCurrPage(0);
    Draggable.create(dragRef.current, {
      type: "x",
      inertia: true,
      bounds: containerRef.current,
      onDrag: function () {
        if (this.hitTest(dropRef.current, "50%")) {
          dragOver();
        } else {
          dragExit();
        }
      },
      onDragEnd: function () {
        if (this.hitTest(dropRef.current, "100%")) {
          drop();
        }
      },
    });
  }, []);

  function dragOver(event) {
    dropRef.current.style.stroke = "rgb(151, 225, 135)";
  }

  function dragExit(event) {
    dropRef.current.style.stroke = "white";
  }

  function drop(event) {
    setTimeout(history.push("./opening-examples"), 1000);
  }

  return (
    <div>
      <MeaLogo className="dark-logo" />
      <div className="opening-text-container">
        <Markup content=' <h3 class="opening-small-title">ברוכים הבאים ללומדת</h3><br><h1 class="colored-text opening-big-title">מודל האירועים</h1>' />
      </div>

      <div className="drag-path-with-balls-container" ref={containerRef}>
        <div ref={dragRef}>
          <svg className="drag-ball drag-drop-balls" viewBox="0 0 191 191">
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="91.47"
                cy="103.16"
                fx="-7.493009568129011"
                fy="130.3439374674152"
                r="102.63"
                gradientTransform="matrix(0.12, 0.99, -1.01, 0.12, 185.03, 0.07)"
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
                <stop offset="0.85" stopColor="#971753" />
                <stop offset="0.93" stopColor="#5e175b" />
              </radialGradient>
            </defs>
            <g className="cls-1-drag-ball">
              <g id="Layer_2" data-name="Layer 2">
                <g id="elements">
                  <image
                    className="drag-ball-glow"
                    width="191"
                    height="191"
                    href="data:image/png;base64,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"
                  />
                  <circle
                    className="drag-ball-fill drag-ball-cursor"
                    cx="95.7"
                    cy="95.09"
                    r="67.96"
                  />
                </g>
                <g id="text">
                  <text
                    className="drag-ball-text drag-ball-cursor"
                    transform="translate(134,102.86)"
                  >
                    גררו אותי
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
        {/* </Draggable> */}
        <svg
          width="503"
          height="20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="linear-gradient-dashed"
              x1="27.48"
              y1="13.15"
              x2="27.48"
              y2="41.81"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="15%" stopColor="#d689e9" />
              <stop offset="52%" stopColor="rgba(223,92,255,1)" />
              <stop offset="100%" stopColor="rgba(255,23,68,1)" />
            </linearGradient>
          </defs>
          <line
            className="dashed-line"
            strokeDasharray="10, 5"
            x1="0"
            y1="9"
            x2="503"
            y2="9"
          ></line>
        </svg>
        <div
          onDragOver={dragOver}
          onDragLeave={dragExit}
          onDrop={drop}
          className="drop ball drag-drop-balls"
        >
          <svg className="drag-drop-balls" viewBox="0 0 259 258">
            <title>white-ring</title>
            <g className="cls-1-drop">
              <g id="Layer_2" data-name="Layer 2">
                <g id="elements">
                  <image
                    className="drop-glow"
                    width="262"
                    height="274"
                    href="data:image/png;base64,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"
                  />
                  <circle
                    ref={dropRef}
                    className="drop-area"
                    className="drop-ring-circle"
                    cx="129.47"
                    cy="129.09"
                    r="93.61"
                  />
                </g>
                <g id="text">
                  <text
                    className="drag-ball-text drop-ball-text"
                    transform="translate(185, 138.86)"
                  >
                    שחררו כאן
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
