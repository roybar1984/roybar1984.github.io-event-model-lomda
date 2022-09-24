import React, { useRef, useEffect } from "react";
import "./TextWithBall.css";
import { Markup } from "interweave";
import gsap from "gsap";

function TextWithBall(props) {
  const ballLineRef = useRef(null);
  const smallBallRef = useRef(null);
  const mouseEventsExamples = props.Data[props.page].text.map((item) => {
    return item;
  });

  useEffect(() => {
    if (props.isFirstAnimationRound || props.isFirstComparisonAnimationRound) {
      const mouseEventsTl = gsap.timeline();
      mouseEventsTl
        .from(".centered-text-container", 1, {
          y: "+=18vh",
          x: "+=0vw",
          duration: 3.3,
          ease: "spin",
          delay: 0.6,
        })
        .to(
          ".delay-ball-part",
          {
            opacity: 1,
            duration: 1,
            ease: "spin",
          },
          "-=1"
        )
        .to(
          ".delay-show-container",
          {
            opacity: 1,
            duration: 0.5,
            ease: "spin",
          },
          "-=1"
        );
      if (props.isComparison) {
        animateComparison(mouseEventsTl);
      } else {
        animateMouseEvents(mouseEventsTl);
      }

      mouseEventsTl.to(".delay-display-btn", {
        display: "block",
        opacity: 1,
        duration: 3,
        ease: "spin",
        delay: 0.6,
      });
    } else {
      if (!props.isComparison) {
        ballLineRef.current.style.height = "25.3989vh";
        smallBallRef.current.style.transform = "translate(0vw, 23.4vh)";
      } else {
        ballLineRef.current.style.height = "28.1989vh";
        smallBallRef.current.style.transform = "translate(0vw, 28vh)";
        props.setIsFirstComparisonAnimationRound(false);
      }
    }
    return () => {
      {
        if (props.isComparison) {
          props.setIsFirstComparisonAnimationRound(false);
        } else {
          props.setIsFirstAnimationRound(false);
        }
      }
    };
  }, []);

  function animateComparison(mouseEventsTl) {
    props.Data[props.page].text[props.indexOfArray].points.forEach(
      (point, index) => {
        let comparisonTl = gsap.timeline();
        comparisonTl.to(`.delay-show-item${index}`, 1, {
          opacity: 1,
          duration: 0.1,
        });
        comparisonTl
          .to(
            `.comparison-ball-line`,
            1,
            { height: " +=5.4vh", duration: 0.1 },
            "-=1"
          )
          .to(
            `.small-ball`,
            1,
            { y: "+=5.4vh", x: "+=0vw", duration: 0.1 },
            "-=1"
          );

        mouseEventsTl.add(comparisonTl);
      }
    );
  }

  function animateMouseEvents(mouseEventsTl) {
    mouseEventsExamples.forEach((element, index) => {
      if (index !== 0) {
        let tl = gsap.timeline();
        tl.to(`.delay-show-item${index}`, 1, { opacity: 1, duration: 0.1 });
        tl.to(`.ball-line`, 1, { height: " +=3.9vh", duration: 0.15 }, "-=1");
        tl.to(
          `.small-ball`,
          1,
          { y: "+=3.9vh", x: "+=0vw", duration: 0.1 },
          "-=1"
        );
        mouseEventsTl.add(tl);
      }
    });
  }

  return (
    <div
      className={`mouse-events-contaier delay-show-container
      ${
        props.isFirstAnimationRound || props.isFirstComparisonAnimationRound
          ? "delay-show-container"
          : "display-after-animation"
      }
        ${props.className} ${props.className}${props.indexOfArray}`}
    >
      {props.isComparison
        ? props.Data[props.page].text[props.indexOfArray].points.map(
            (point, index) => {
              return (
                <div
                  className={` ${
                    props.isFirstAnimationRound ||
                    props.isFirstComparisonAnimationRound
                      ? "delay-show-items"
                      : "display-after-animation"
                  } delay-show-item${index} comparison-dots }`}
                  key={index}
                >
                  <Markup content={point} />
                </div>
              );
            }
          )
        : mouseEventsExamples.map((item, index) => {
            if (index !== 0) {
              return (
                <div
                  className={`delay-show-item${index} ${
                    props.isFirstAnimationRound ||
                    props.isFirstComparisonAnimationRound
                      ? "delay-show-items"
                      : "display-after-animation"
                  }`}
                  key={index}
                >
                  <Markup content={props.Data[props.page].text[index]} />
                </div>
              );
            }
          })}
      <div>
        <hr
          ref={ballLineRef}
          className={`delay-ball-part ball-line ${
            props.isComparison && "comparison-ball-line"
          } ${
            (!props.isFirstAnimationRound ||
              !props.isFirstComparisonAnimationRound) &&
            "display-after-animation"
          }`}
        />
        <svg
          ref={smallBallRef}
          className={`delay-ball-part small-ball`}
          viewBox="0 0 20.25 20.25"
        >
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="9.49"
              cy="11.33"
              fx="-5.250462795858832"
              r="15.29"
              gradientTransform="translate(19.82 0.55) rotate(83.26) scale(1 1.02)"
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
          <title>small-ball</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="elements">
              <circle
                className="cls-1-small-ball"
                cx="10.12"
                cy="10.12"
                r="10.12"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default TextWithBall;
