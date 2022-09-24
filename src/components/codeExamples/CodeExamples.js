import React, { useEffect } from "react";
import NextAndBackButtons from "../nextAndBackButtons/NextAndBackButtons";
import "./CodeExamples.css";
import BlackCodeBlock from "../blackCodeBlock/BlackCodeBlock";
import EventListenerExample from "../eventListenerExample/EventListenerExample";

function CodeExamples(props) {
  useEffect(() => {
    if (props.page === 13) {
         props.setCurrPage(2);
       }
     }, [props.page]);
  return (
    <div>
      <h1 className="main-title code-example-title">
        {props.Data[props.page].title}
      </h1>
      <div className="code-block-example-container ">
        <BlackCodeBlock
          codeBlocksText={props.Data[props.page].codeText[0]}
          className="block-with-border code-font remove-margin-bottom block-with-border-code"
        />
        <div className="code-examples-part">
          <div className="code-blocks-side">
             <BlackCodeBlock
             type="html"
              codeBlocksText={props.Data[props.page].codeText[1]}
            className={`html-code-block code-font ${props.page=== 11 ? "add-margin-black-code js-and-html-add":props.page=== 13 && "js-and-html-remove"}`}
            /> 
            <BlackCodeBlock
            type="js"
              codeBlocksText={props.Data[props.page].codeText[2]}
            className={`html-code-block code-font ${props.page=== 11 ? "add-margin-black-code js-and-html-add":props.page=== 13 && "js-and-html-remove"}`}
            />
          </div>
          <EventListenerExample page={props.page} />
        </div>
      </div>
      <NextAndBackButtons next={props.next} back={props.back} />
    </div>
  );
}

export default CodeExamples;
