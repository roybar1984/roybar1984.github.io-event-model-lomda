import React, { useState } from "react";
import "./CurrentTargetExample.css";
import { Markup } from "interweave";
import Btn from "../btn/Btn";
import BlackCodeBlock from "../blackCodeBlock/BlackCodeBlock";

function CurrentTargetExample(props) {
  const [chosenButton, setChosenButton] = useState(0);
  const [style1, setStyle1] = useState(0);
  const [style2, setStyle2] = useState(0);

  const handleClick = (num, myStyle, setMyStyle, setOtherStyle) => {
    setChosenButton(num);
    if(myStyle !== "#ffffff58"){
        setMyStyle("#ffffff58");
        setOtherStyle("#fffacd00")
    }
  };

  return (
    <div className="current-target-container">
      <Markup content={props.Data[props.page].exampleText} />
      <BlackCodeBlock
       type="js"
        codeBlocksText={props.Data[props.page].codeText}
        className="current-target-code-block code-font"
      />
      <div className="black-console-current-target">
      <p className="code-type console-type">console</p>
        <p className="current-target-console-text">
          event.currentTarget: {chosenButton !== 0 && (<span>{`<button id="btn${chosenButton}">כפתור ${chosenButton}</button>`}</span>)}
        </p>
        <p  className="current-target-console-text">
          event.currentTarget.id: {chosenButton !== 0 && <span>{`btn${chosenButton}`}</span>}
        </p>
      </div>
      <div className="current-target-buttons-container">
        <Btn
          handleClick={handleClick}
          num={1}
          page={props.page}
          buttonText="כפתור 1"
          setMyStyle={setStyle1}
          myStyle={style1}
          setOtherStyle={setStyle2}
          />
        <Btn
          handleClick={handleClick}
          num={2}
          page={props.page}
          buttonText="כפתור 2"
          myStyle={style2}
          setMyStyle={setStyle2}
          setOtherStyle={setStyle1}
        />
      </div>
    </div>
  );
}

export default CurrentTargetExample;