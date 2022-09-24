import React, { useEffect } from "react";
import NextAndBackButtons from "../../components/nextAndBackButtons/NextAndBackButtons";
import TextWithBall from "./../../components/TextWithBall/TextWithBall";
import "./ComparisonPage.css";

function ComparisonPage(props) {
  useEffect(() => {
    props.setCurrPage(3);
  }, [props.page]);
  return (
    <div>
      <h1 className="main-title comparison-title">
        {props.Data[props.page].title}
      </h1>
      <div className="comparison-parts-container">
        <div className="function-type-title-container">
          <h2
            className={`subtitle-funtion-type delay-show-container ${
              !props.isFirstComparisonAnimationRound &&
              "display-after-animation"
            }`}
          >
            {props.Data[props.page].text[0].subtitle}
          </h2>
          <TextWithBall
            Data={props.Data}
            page={19}
            isArray={true}
            isBall={true}
            isComparison={true}
            indexOfArray={0}
            className="comparison-container"
            hrClassName="comparison-ball-line"
            isFirstComparisonAnimationRound={
              props.isFirstComparisonAnimationRound
            }
            setIsFirstComparisonAnimationRound={
              props.setIsFirstComparisonAnimationRound
            }
            isFirstAnimationRound={props.isFirstAnimationRound}
            setIsFirstAnimationRound={props.setIsFirstAnimationRound}
          />
        </div>
        <div className="function-type-title-container">
          <h2
            className={`subtitle-funtion-type delay-show-container ${
              !props.isFirstComparisonAnimationRound &&
              "display-after-animation"
            }`}
          >
            {props.Data[props.page].text[1].subtitle}
          </h2>
          <TextWithBall
            Data={props.Data}
            page={19}
            isArray={true}
            isBall={true}
            isComparison={true}
            indexOfArray={1}
            className="comparison-container"
            hrClassName="comparison-ball-line"
            isFirstComparisonAnimationRound={
              props.isFirstComparisonAnimationRound
            }
            setIsFirstComparisonAnimationRound={
              props.setIsFirstComparisonAnimationRound
            }
            isFirstAnimationRound={props.isFirstAnimationRound}
            setIsFirstAnimationRound={props.setIsFirstAnimationRound}
          />
        </div>
      </div>
      <div
        className={`${
          props.isFirstComparisonAnimationRound
            ? "delay-display-btn"
            : "show-btns"
        }  `}
      >
        <NextAndBackButtons back={props.back} next={props.next} />
      </div>
    </div>
  );
}

export default ComparisonPage;
