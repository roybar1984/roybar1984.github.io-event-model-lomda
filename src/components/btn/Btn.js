import React, { useEffect, useRef } from "react";
import "./Btn.css";
import { gsap } from "gsap";

function Btn(props) {
  const buttonRef = useRef(null);
  const handleHover = () => {
    if (props.page === 2) {
      props.setIsPlusBtnOver(true);
    }
    if (buttonRef.current.className === "backClass") {
      gsap.to(buttonRef.current, {
        ease: "sine",
        duration: 0.25,
        background:
          "linear-gradient(90deg,rgba(187, 55, 254, 1) 0%,rgba(251, 210, 92, 1) 52%,rgba(151, 255, 135, 1) 100%);",
      });
    } else {
      gsap.to(buttonRef.current, {
        ease: "sine",
        duration: 0.25,
        background:
          "linear-gradient(90deg,rgba(187, 55, 254, 1) 100%,rgba(251, 210, 92, 1) 52%,rgba(151, 255, 135, 1) 0%);",
      });
    }
  };
  const handleLeave = () => {
    if (props.page === 2) {
      props.setIsPlusBtnOver(false);
    }
  };


  return (
    <div
      ref={buttonRef}
      // onMouseOver={props.page === 2 ? props.handleOver : handleHover}
      onMouseOut={handleLeave}
      onMouseOver={handleHover}
      onClick={ () => {
              props.handleClick(props.page === 21&&
                props.num,
                props.myStyle,
                props.setMyStyle,
                props.setOtherStyle
              )
            }
          // : ()=> props.handleClick
      }
      className={`${props.backClass} event-text cls-2-btn text-btns ${props.className}`}
      style={{ backgroundColor: props.myStyle }}
    >
      {props.buttonText}
    </div>
  );
}

export default Btn;
