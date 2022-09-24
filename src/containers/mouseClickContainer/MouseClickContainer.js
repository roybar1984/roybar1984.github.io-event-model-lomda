import React, { useEffect } from "react";
import "./MouseClickContainer.css";
import EventsExamples from "./../../components/eventsExamples/EventsExamples";
import SideExampleText from "../../components/SideExampleText/SideExampleText";
import NextAndBackButtons from "./../../components/nextAndBackButtons/NextAndBackButtons";
import CurrentTargetExample from "./../../components/currentTargetExample/CurrentTargetExample";

function MouseClickContainer(props) {
  useEffect(() => {
    if (props.page === 7) {
      props.setCurrPage(1);
    } else if (props.page === 21) {
      props.setCurrPage(4);
    }
  }, [props.page]);
  return (
    <div>
      <div className="mouse-click-container">
        <SideExampleText
          isCurrentTarget={props.isCurrentTarget}
          page={props.page}
          Data={props.Data}
        />
        {props.page === 21 ? (
          <CurrentTargetExample page={props.page} Data={props.Data} />
        ) : (
          <EventsExamples page={props.page} />
        )}
      </div>
      <NextAndBackButtons back={props.back} next={props.next} />
    </div>
  );
}

export default MouseClickContainer;
