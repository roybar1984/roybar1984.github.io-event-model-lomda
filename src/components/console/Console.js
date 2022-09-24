import React, { useEffect, useRef } from "react";
import "./Console.css";
import { Markup } from "interweave";

function Console(props) {
  const bottomRef = useRef();

  const scrollToBottom = () => {
    bottomRef.current.scrollTop =
      bottomRef.current.scrollHeight - bottomRef.current.clientHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.actionsArray]);

  return (
    <div
      className="console"
      ref={bottomRef}
      style={{ width: `${props.width}`, height: `${props.height}` }}
    >
      {props.actionsArray.map((text, index) => {
        return (
          <div key={index}>
            {props.actionsArray[index] ===
              `<p class="console-text mouseup-color">mousemove</p>` ||
            props.actionsArray[index] ===
              '<p class="console-text">שינית את הקלט של תיבת הטקסט</p>' ||
            props.actionsArray[index] ===
              '<p class="console-text">שינית את הקלט של ה-checkbox</p>' ? (
              <div className="move-div">
                <Markup content={props.actionsArray[index]} />
                <span
                  className={
                    props.actionsArray[index] ===
                    `<p class="console-text mouseup-color">mousemove</p>`
                      ? props.numOfRepeat > 1 &&
                        (index - 1) / 3 === props.numOfRepeatArray.length
                        ? props.numOfRepeat > 1 && "move-counter"
                        : props.numOfRepeatArray[(index - 1) / 3] > 1 &&
                          "move-counter"
                      : index === props.numOfRepeatArray.length
                      ? props.numOfRepeat > 1 && "move-counter"
                      : props.numOfRepeatArray[index] > 1 && "move-counter"
                  }
                >
                  {props.actionsArray[index] ===
                  `<p class="console-text mouseup-color">mousemove</p>`
                    ? props.numOfRepeat > 1 &&
                      (index - 1) / 3 === props.numOfRepeatArray.length
                      ? props.numOfRepeat > 1 && props.numOfRepeat
                      : props.numOfRepeatArray[(index - 1) / 3] > 1 &&
                        props.numOfRepeatArray[(index - 1) / 3]
                    : index === props.numOfRepeatArray.length
                    ? props.numOfRepeat > 1 && props.numOfRepeat
                    : props.numOfRepeatArray[index] > 1 &&
                      props.numOfRepeatArray[index]}
                </span>
              </div>
            ) : (
              <div className="mouseout-div">
                <Markup content={props.actionsArray[index]} />
                {props.actionsArray[index] ===
                  '<p class="console-text click-color">mouseout</p>' && (
                  <hr className="console-hr" />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Console;
