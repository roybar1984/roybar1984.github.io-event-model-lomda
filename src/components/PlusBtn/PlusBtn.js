import "./PlusBtn.css";
import React from "react";

function PlusBtn(props) {
  return (
    <svg
      onClick={props.handleClick}
      onMouseLeave={props.handleLeave}
      onMouseEnter={props.handleOver}
      className="plusBtn btns make-plus-disapear"
      viewBox="0 0 54.96 54.96"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="27.48"
          x2="27.48"
          y2="54.96"
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
          className="innerPlus"
          id="linear-gradient-2"
          x1="27.48"
          y1="13.15"
          x2="27.48"
          y2="41.81"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="9%" stopColor="rgba(92,184,209,1)" />
          <stop offset="30%" stopColor="rgba(223,92,255,1)" />
          <stop offset="95%" stopColor="rgba(255,23,68,1)" />
        </linearGradient>
        <linearGradient
          className="innerPlus"
          id="linear-gradient-3"
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
        <g
          id="elements"
          
        >
          <circle className="plus-border" cx="27.48" cy="27.48" r="26.83" />
          <path
            className="inner-plus"
            d="M39.86,24.88H30.09V15.1a2,2,0,0,0-2-1.95h-1.3a2,2,0,0,0-1.95,1.95v9.78H15.1a2,2,0,0,0-1.95,1.95v1.3a2,2,0,0,0,1.95,2h9.78v9.77a2,2,0,0,0,1.95,2h1.3a2,2,0,0,0,2-2V30.09h9.77a2,2,0,0,0,2-2v-1.3A2,2,0,0,0,39.86,24.88Z"
          />
        </g>
      </g>
    </svg>
  );
}

export default PlusBtn;
