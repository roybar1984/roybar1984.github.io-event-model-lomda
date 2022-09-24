import React from "react";
import { Markup } from "interweave";
import "./SideExampleText.css";

function SideExampleText(props) {
  return (
    <div
      className={`title-text-container ${
        props.isCurrentTarget && "title-text-container-current-target"
      }`}
    >
      <h1
        className={`main-title side-example-text-title ${
          props.isCurrentTarget && "side-example-text-title-current-target"
        }`}
      >
        {props.Data[props.page].title}
      </h1>
      <div>
        <Markup content={props.Data[props.page].text} />
      </div>
    </div>
  );
}

export default SideExampleText;
