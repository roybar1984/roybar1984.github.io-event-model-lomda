import React, { useEffect } from "react";
import "./MouseEventConteiner.css";
import CenteredText from "../CenteredText/CenteredText";
import NextAndBackButtons from "./../../components/nextAndBackButtons/NextAndBackButtons";

function MouseEventConteiner(props) {
  useEffect(() => {
    if (props.page >= 3 && props.page <= 8) {
    // if (props.page === 3) {
      props.setCurrPage(1);
    } else if (props.page >= 10 &&props.page <= 12) {
      props.setCurrPage(2);
    } else if (props.page >= 14 &&props.page <= 17) {
      props.setCurrPage(3);
    } else if (props.page === 20) {
      props.setCurrPage(4);
    }
  }, [props.page]);

  return (
    <div className="mouse-event-container">
      <CenteredText
        Data={props.Data}
        page={props.page}
        isArray={props.isArray}
        isBall={props.isBall}
        hasCodeBlock={props.hasCodeBlock}
        hasStartCodeBlock={props.hasStartCodeBlock}
        isFunctions={props.isFunctions}
        hasSmallDots={props.hasSmallDots}
        hasEndCodeBlock={props.hasEndCodeBlock}
        isFirstPage={props.isFirstPage}
        isContinuePage={props.isContinuePage}
        isCurrentTarget={props.isCurrentTarget}
        isFirstAnimationRound={props.isFirstAnimationRound}
        setIsFirstAnimationRound={props.setIsFirstAnimationRound}
      />

      <div
        className={`${
          props.isFirstAnimationRound ? "delay-display-btn" : "show-btns"
        }`}
      >
        <NextAndBackButtons
          isFirstAnimationRound={props.isFirstAnimationRound}
          isContinuePage={props.isContinuePage}
          back={props.back}
          next={props.next}
        />
      </div>
    </div>
  );
}

export default MouseEventConteiner;
