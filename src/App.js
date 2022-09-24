import React, { useState, useRef, useEffect } from "react";
import OpeningExamplesContainer from "./containers/openingExamplesContainer/OpeningExamplesContainer";
import Data from "./data/text.json";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TextDisplayWithBtn from "./containers/TextDisplayWithBtn/TextDisplayWithBtn";
import MouseEventConteiner from "./containers/mouseEventConteiner/MouseEventConteiner";
import NavBar from "./containers/navBar/NavBar";
import CodeExamples from "./components/codeExamples/CodeExamples";

import MouseClickContainer from "./containers/mouseClickContainer/MouseClickContainer";
import ComparisonPage from "./containers/comparisonPage/ComparisonPage";
import LastPage from "./components/lastPage/LastPage";
import AboutPage from "./components/aboutPage/Aboutpage";
import { gsap } from "gsap";
import FirstPage from "./components/firstPage/FirstPage";
import { PageTransition } from "next-page-transitions";

function App(props) {
  const [currPage, setCurrPage] = useState(0);
  const [isFirstRound, setIsFirstRound] = useState(true);
  const appRef = useRef(null);
  const [isFirstAnimationRound, setIsFirstAnimationRound] = useState(true);
  const [isFirstComparisonAnimationRound, setIsFirstComparisonAnimationRound] =
    useState(true);

  const appBackColors = [
    "linear-gradient(to right top,#a11c3b,#871645,#6a1848,#4c1a45,#30183b,#2b1c3f,#262042,#202344,#2a315c,#344075,#3c5090,#4361ab)",
    "linear-gradient(to right top,#b62150,#961e56,#731f56,#511f4e,#321b40,#2d1f43,#282345,#232646,#303860,#3b4a7c,#465e9a,#4f73b8)",
    "linear-gradient(to right top, #cd3d6f, #a5356e, #7d2f66, #572958, #352045, #302448, #2b2849, #272b4a, #374167, #475886, #5571a7, #638bc8)",
    "linear-gradient(to right top, #e55b91, #b74d88, #894078, #5f3364, #39254b, #34294d, #2f2c4d, #2b2f4d, #3f486c, #52648d, #6681b0, #799fd3)",
    "linear-gradient(to right top, #eb74a5, #bb6095, #8d4e81, #623b68, #3b294d, #362d4f, #333150, #303550, #485372, #617396, #7b95bc, #95b9e2)",
  ];

  useEffect(() => {
    gsap.to(appRef.current, {
      ease: "sine",
      duration: 0.8,
      backgroundImage: appBackColors[currPage],
    });
  }, [currPage]);


  return (
    <div ref={appRef} className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <FirstPage setCurrPage={setCurrPage} />
          </Route>
          <Route path="/opening-examples">
            <PageTransition timeout={1000} classNames="page-transition">
              <OpeningExamplesContainer Data={Data} page={1} />
            </PageTransition>
          </Route>
          <Route exact path="/intro">
            <NavBar isFirstRound={isFirstRound} page={2} />
            <TextDisplayWithBtn
              isEventListener={false}
              maxClicksNum={2}
              Data={Data}
              setCurrPage={setCurrPage}
              page={2}
            />
          </Route>
          <Route exact path="/event-types">
            {/* <PageTransition timeout={1000} classNames="page-transition-gradient"> */}
            <NavBar isFirstRound={isFirstRound} page={3} />
            <MouseEventConteiner
              back="intro"
              next="event-types/mouse-events"
              Data={Data}
              page={3}
              setCurrPage={setCurrPage}
            />
          </Route>
          <Route exact path="/event-types/mouse-events">
            <NavBar isFirstRound={isFirstRound} page={4} />
            <MouseEventConteiner
              back="event-types"
              next="event-types/mouse-events/click"
              Data={Data}
              setCurrPage={setCurrPage}
              page={4}
              isArray={true}
              isBall={true}
              isFirstAnimationRound={isFirstAnimationRound}
              setIsFirstAnimationRound={setIsFirstAnimationRound}
            />
          </Route>
          <Route exact path="/event-types/mouse-events/click">
            <NavBar isFirstRound={isFirstRound} page={5} />
            <MouseClickContainer
              back="event-types/mouse-events"
              next="event-types/mouse-events/move"
              Data={Data}
              page={5}
            />
          </Route>
          <Route exact path="/event-types/mouse-events/move">
            <NavBar isFirstRound={isFirstRound} page={6} />
            <MouseClickContainer
              back="event-types/mouse-events/click"
              next="event-types/input-events"
              Data={Data}
              page={6}
            />
          </Route>
          <Route exact path="/event-types/input-events">
            <NavBar isFirstRound={isFirstRound} page={7} />
            <MouseClickContainer
              back="event-types/mouse-events/move"
              next="event-types/load-event"
              setCurrPage={setCurrPage}
              Data={Data}
              page={7}
            />
          </Route>
          <Route exact path="/event-types/load-event">
            <NavBar isFirstRound={isFirstRound} page={8} />
            <MouseEventConteiner
              back="event-types/input-events"
              next="event-listeners"
              setCurrPage={setCurrPage}
              Data={Data}
              page={8}
            />
          </Route>
          <Route exact path="/event-listeners">
            <NavBar isFirstRound={isFirstRound} page={9} />
            <TextDisplayWithBtn
              isEventListener={true}
              maxClicksNum={1}
              Data={Data}
              page={9}
              setCurrPage={setCurrPage}
              back="event-types/load-event"
              next="event-listeners/add-event-listeners"
            />
          </Route>
          <Route exact path="/event-listeners/add-event-listeners">
            <NavBar isFirstRound={isFirstRound} page={10} />
            <MouseEventConteiner
              back="event-listeners"
              next="event-listeners/add-event-listeners-example"
              Data={Data}
              setCurrPage={setCurrPage}
              page={10}
              hasStartCodeBlock={true}
            />
          </Route>
          <Route exact path="/event-listeners/add-event-listeners-example">
            <NavBar isFirstRound={isFirstRound} page={11} />
            <CodeExamples
              back="event-listeners/add-event-listeners"
              next="event-listeners/remove-event-listener"
              codeBlocksText={Data[13].codeText}
              Data={Data}
              page={11}
            />
          </Route>
          <Route path="/event-listeners/remove-event-listener">
            <NavBar isFirstRound={isFirstRound} page={12} />
            <MouseEventConteiner
              back="event-listeners/add-event-listeners-example"
              next="event-listeners/remove-event-listeners-example"
              Data={Data}
              isArray={true}
              setCurrPage={setCurrPage}
              hasCodeBlock={true}
              page={12}
            />
          </Route>
          <Route exact path="/event-listeners/remove-event-listeners-example">
            <NavBar isFirstRound={isFirstRound} page={13} />
            <CodeExamples
              back="event-listeners/remove-event-listener"
              next="functions"
              codeBlocksText={Data[13].codeText}
              setCurrPage={setCurrPage}
              Data={Data}
              page={13}
            />
          </Route>
          <Route path="/functions">
            <NavBar isFirstRound={isFirstRound} page={14} />
            <MouseEventConteiner
              back="event-listeners/remove-event-listeners-example"
              next="anonymous-functions"
              Data={Data}
              isArray={true}
              setCurrPage={setCurrPage}
              hasCodeBlock={true}
              isFunctions={true}
              page={14}
            />
          </Route>
          <Route path="/anonymous-functions">
            <NavBar isFirstRound={isFirstRound} page={15} />
            <MouseEventConteiner
              back="functions"
              next="anonymous-functions-continue"
              Data={Data}
              isArray={true}
              setCurrPage={setCurrPage}
              hasCodeBlock={true}
              hasSmallDots={true}
              isFirstPage={true}
              page={15}
            />
          </Route>
          <Route path="/anonymous-functions-continue">
            <NavBar isFirstRound={isFirstRound} page={16} />
            <MouseEventConteiner
              back="anonymous-functions"
              next="arguments.callee"
              Data={Data}
              isArray={true}
              hasCodeBlock={true}
              setCurrPage={setCurrPage}
              hasSmallDots={true}
              isContinuePage={true}
              page={16}
            />
          </Route>
          <Route path="/arguments.callee">
            <NavBar isFirstRound={isFirstRound} page={17} />
            <MouseEventConteiner
              back="anonymous-functions-continue"
              next="arguments.callee-continue"
              Data={Data}
              setCurrPage={setCurrPage}
              hasEndCodeBlock={true}
              hasSmallDots={true}
              isFirstPage={true}
              page={17}
            />
          </Route>
          <Route path="/arguments.callee-continue">
            <NavBar isFirstRound={isFirstRound} page={18} />
            <MouseEventConteiner
              back="arguments.callee"
              next="function-comparison"
              Data={Data}
              hasEndCodeBlock={true}
              hasSmallDots={true}
              isContinuePage={true}
              page={18}
            />
          </Route>
          <Route exact path="/function-comparison">
            <NavBar isFirstRound={isFirstRound} page={19} />
            <ComparisonPage
              Data={Data}
              page={19}
              setCurrPage={setCurrPage}
              back="arguments.callee-continue"
              next="event"
              isComparisonPage={true}
              isFirstComparisonAnimationRound={isFirstComparisonAnimationRound}
              setIsFirstComparisonAnimationRound={
                setIsFirstComparisonAnimationRound
              }
            />
          </Route>
          <Route exact path="/event">
            <NavBar isFirstRound={isFirstRound} page={20} />
            <MouseEventConteiner
              back="function-comparison"
              setCurrPage={setCurrPage}
              next="event/current-target"
              Data={Data}
              page={20}
              isCurrentTarget={true}
            />
          </Route>
          <Route exact path="/event/current-target">
            <NavBar isFirstRound={isFirstRound} page={21} />
            <MouseClickContainer
              back="event"
              next="finish"
              Data={Data}
              setCurrPage={setCurrPage}
              page={21}
              isCurrentTarget={true}
            />
          </Route>
          <Route exact path="/finish">
            <LastPage Data={Data} page={22} setCurrPage={setCurrPage} setIsFirstRound={setIsFirstRound} />
          </Route>
          <Route exact path="/about">
            <AboutPage setIsFirstRound={setIsFirstRound} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
