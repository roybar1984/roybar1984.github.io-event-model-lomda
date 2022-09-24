import React, { useState, useEffect } from "react";
import "./OpeningExamplesContainer.css";
import BackgroundExamples from "../../components/backgroundExamples/BackgroundExamples";
import Btn from "./../../components/btn/Btn";
import { gsap } from "gsap";
import { useHistory } from "react-router-dom";
import { PageTransition } from 'next-page-transitions'

function OpeningExamplesContainer(props) {
  const [isHidden, setIsHidden] = useState("hidden");  
  const history = useHistory();
  const [didOpenAll, setDidOpenAll] = useState(0);

  function handleClickNext(event) {
    history.push("/intro");
  }
  useEffect(() => {
    if (didOpenAll === 3) {
      const tl = gsap.timeline();
      tl.to(".exampels-part", {
        ease: "sine",
        duration: 1.5,
        delay:0.5,
        y:-70
      }).to(".after-examples", 2, {
        ease: "sine",
        duration: 0.75,
        display:"flex",
        opacity: 1
      });
    }
  }, [didOpenAll]);

  return (
    <div className="opening-exampels">
      <div className="exampels-part">
        <BackgroundExamples isHidden={isHidden} setIsHidden={setIsHidden} wait={800} setDidOpenAll={setDidOpenAll} part="1" />
        <BackgroundExamples isHidden={isHidden} setIsHidden={setIsHidden} wait={800} setDidOpenAll={setDidOpenAll} part="2" />
        <BackgroundExamples isHidden={isHidden} setIsHidden={setIsHidden} wait={800} setDidOpenAll={setDidOpenAll} part="3" />
      </div>
      <div className="after-examples">
        <p className="opening-examples-text">{props.Data[props.page].text}</p>
        <Btn className={didOpenAll === 3 && "btns"} handleClick={didOpenAll === 3 &&handleClickNext} buttonText="בואו נגלה" page={props.page} />
      </div>
    </div>
  );
}

export default OpeningExamplesContainer;
