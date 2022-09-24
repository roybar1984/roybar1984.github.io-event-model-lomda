import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./CenteredText.css";
import { Markup } from "interweave";
import TextWithBall from "./../../components/TextWithBall/TextWithBall";
import TextWithCodeBlocks from "../../components/TextWithCodeBlocks/TextWithCodeBlocks";
import BlackCodeBlock from "./../../components/blackCodeBlock/BlackCodeBlock";

function CenteredText(props) {
  const centeredDivRef = useRef(null);

  useEffect(() => {
    if (props.page === 16 || props.page === 18) {
      gsap.from(centeredDivRef.current, 1, {
        ease: "spin",
        duration: 0.3,
        opacity: 0,
      });
    }
  }, [props.page]);

  return (
    <div className="align-center-container">
      <div
        className={`centered-text-container`}
      >
        {props.hasSmallDots && (
          <svg className="dots-container" viewBox="0 0 46.13 14.02">
            <g id="Layer_2" data-name="Layer 2">
              <g id="elements">
                <circle
                  className={`dots ${
                    props.isFirstPage ? "selected-dot" : "empty-dot"
                  }`}
                  cx="39.12"
                  cy="7.01"
                  r="6.51"
                />
                <circle
                  className={`dots ${
                    !props.isFirstPage ? "selected-dot" : "empty-dot"
                  }`}
                  cx="7.01"
                  cy="7.01"
                  r="6.51"
                />
              </g>
            </g>
          </svg>
        )}
        <h1 className="main-title title">{props.Data[props.page].title}</h1>
        {props.hasStartCodeBlock && (
          <BlackCodeBlock
            codeBlocksText={props.Data[props.page].codeText}
            className="block-with-border code-font"
          />
        )}
        <div ref={centeredDivRef} className={`centered-text`}>
          {props.hasCodeBlock ? (
            <TextWithCodeBlocks
              Data={props.Data}
              page={props.page}
              codeBlocksText={props.Data[props.page].codeText}
              isFunctions={props.isFunctions}
              isCurrentTarget={props.isCurrentTarget}
              className="block-with-border code-font"
            />
          ) : props.isArray ? (
            <div className="text-with-examples-container">
              <Markup content={props.Data[props.page].text[0]} />
              {props.isBall && (
                <TextWithBall
                  Data={props.Data}
                  page={props.page}
                  isFirstAnimationRound={props.isFirstAnimationRound}
                  setIsFirstAnimationRound={props.setIsFirstAnimationRound}
                />
              )}
            </div>
          ) : (
            <div>
              <Markup content={props.Data[props.page].text} />
              {props.hasEndCodeBlock && (
                <BlackCodeBlock
                  codeBlocksText={props.Data[props.page].codeText}
                  className="block-with-border code-font"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CenteredText;
