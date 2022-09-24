import React from "react";
import "./NextAndBackButtons.css";
import Btn from "../btn/Btn";
import { useHistory } from "react-router-dom";

function NextAndBackButtons(props) {
  const history = useHistory();
  
  const handleBack= ()=>{
    history.push(`/${props.back}`);
  }
  const handleNext = ()=>{
      history.push(`/${props.next}`);
  }

  return (
    <div className={`prev-back-btns-container ${props.isContinuePage && "display-none-btns"}`}>
        <Btn className="prev-next-btn btns" handleClick={handleBack} buttonText="חזור" backClass="backClass" />
        <Btn className="prev-next-btn btns" handleClick={handleNext} buttonText="המשך" backClass="noBackClass"/>
    </div>
  );
}


export default NextAndBackButtons;
