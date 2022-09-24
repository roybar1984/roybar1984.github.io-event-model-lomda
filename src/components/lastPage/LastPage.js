import React, {useEffect} from "react";
import "./LastPage.css";
import { Markup } from "interweave";
import { useHistory } from "react-router-dom";
import Btn from "./../../components/btn/Btn";

function LastPage(props) {
  const history = useHistory();

  useEffect(()=>{props.setCurrPage(4)},[props.page])

  function handleAbout(event) {
    history.push(`/about`);
  }
  
  function handleStartOver(event) {
    props.setIsFirstRound(false);
    history.push(`/`);
  }

  return (
    <div className="centered-text-container last-page-container">
      <Markup content={props.Data[props.page].text} />
      <div className="prev-back-btns-container last-page-btns-container">
        <Btn className="btns" handleClick={handleStartOver} isStartOverBtn={true} buttonText="בחזרה ללומדה" />
        <Btn className="btns" buttonText="אודות" handleClick={handleAbout} />
      </div>
    </div>
  );
}

export default LastPage;
