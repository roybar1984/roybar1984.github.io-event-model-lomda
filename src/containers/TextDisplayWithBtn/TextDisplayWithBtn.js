import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Markup } from "interweave";
import PlusBtn from "../../components/PlusBtn/PlusBtn";
import Btn from "./../../components/btn/Btn";
import "./TextDisplayWithBtn.css";
import { useHistory } from "react-router-dom";
import NextAndBackButtons from "./../../components/nextAndBackButtons/NextAndBackButtons";

function TextDisplayWithBtn(props) {
  let history = useHistory();
  const [clickNum, setClickNum] = useState(0);
  const [linesToShow, setLinesToShow] = useState([]);
  const [isPlusBtnOver, setIsPlusBtnOver] = useState(false);

  useEffect(() => {
    if (props.page === 2) {
      setClickNum(0);
      props.setCurrPage(0);
    } else if (props.page === 9) {
      props.setCurrPage(2);
    }
  }, [props.page]);

  useEffect(() => {
    setLinesToShow((prevState) => [...prevState, clickNum]);
    if (clickNum === props.maxClicksNum) {
      const addText = gsap.timeline();
      addText
        .to(".make-plus-disapear", 0, {
          opacity: 0,
          display: "none",
          duration: 0.5,
          ease: "spin",
        })
        .to(".delay-show-btn", 3, {
          opacity: 1,
          duration: 2,
          ease: "spin",
        });
    }
  }, [clickNum]);

  useEffect(() => {
    gsap.timeline().from(`.delay-text${linesToShow.length}`, 1, {
      ease: "spin",
      duration: 0.75,
      delay: 0.2,
      opacity: 0,
    });
  }, [linesToShow]);

  function handleClick(event) {
    if (clickNum < props.maxClicksNum) {
      setClickNum((prevState) => (prevState = prevState + 1));
    }
  }

  function handleOver(event) {
    gsap.to(".inner-plus", 0, { fill: " url(#linear-gradient-3)" });
    gsap.to(".plus-border", 0, { stroke: " url(#linear-gradient-3)" });
    setIsPlusBtnOver(true);
  }

  function handleLeave(event) {
    setIsPlusBtnOver(false);
    gsap.to(".inner-plus", 0, { fill: " url(#linear-gradient-2)" });
    gsap.to(".plus-border", 0, { stroke: " url(#linear-gradient-2)" });
  }

  function handleClickNext(event) {
    history.push("/event-types");
  }

  return (
    <div className="text-title-btn-container">
      {props.isEventListener && (
        <h1 className="title title-9">{props.Data[props.page].title}</h1>
      )}
      <div
        className={`text-btn-container ${
          isPlusBtnOver && "text-btn-container-hover"
        }`}
      >
        <div className="text-container">
          {linesToShow.map((line, index) => {
            return (
              <div key={index} className="paragrapghs">
                <Markup content={props.Data[props.page].text[line]} />
              </div>
            );
          })}
        </div>

        <PlusBtn
          handleLeave={handleLeave}
          handleOver={handleOver}
          handleClick={handleClick}
        />
      </div>
      {clickNum === props.maxClicksNum && (
        <div className="delay-show-btn">
          {props.isEventListener ? (
            <NextAndBackButtons back={props.back} next={props.next} />
          ) : (
            <Btn
              className="start-btn btns"
              page={props.page}
              setIsPlusBtnOver={setIsPlusBtnOver}
              handleClick={handleClickNext}
              buttonText="יאללה נתחיל"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default TextDisplayWithBtn;
