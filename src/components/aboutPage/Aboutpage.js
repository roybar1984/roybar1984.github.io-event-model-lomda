import "./AboutPage.css";
import React, { useRef } from "react";
import MeaLogo from "./../../components/meaLogo/MeaLogo";
import { Markup } from "interweave";
import Btn from "./../../components/btn/Btn";
import { gsap } from "gsap";
import { useHistory } from "react-router-dom";

function AboutPage(props) {
  const history = useHistory();
  const rhumbRef1 = useRef(null);
  const rhumbRef2 = useRef(null);
  const rhumbRef3 = useRef(null);
  const rhumbRef4 = useRef(null);
  
  function handleStartOver(event) {
    props.setIsFirstRound(false);
    history.push("/");
  }

  return (
    <div>
      <MeaLogo />
      <div className="about-page-container">
        <h1 className="main-title about-page-titles">אודות</h1>
        <div className="rumbs-container">
          <div className="single-rhombus-container">
            <svg
              id="1"
              ref={rhumbRef1}
              onMouseEnter={()=>{gsap.to(rhumbRef1.current,{y:"-5", ease:"spin", duration:1});}}
              onMouseLeave={()=>{gsap.to(rhumbRef1.current,{y:"5", ease:"spin", duration:1});}}
              className={`about-page-rhombus rhombus1`}
              viewBox="0 0 45.29 45.29"
            >
              <defs>
                <linearGradient
                  id="linear-gradient-pink"
                  x1="-6391.36"
                  y1="2800.38"
                  x2="-6373.38"
                  y2="2838.95"
                  gradientTransform="translate(6405.01 -2797.02)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(188,153,255,1)" />
                  <stop offset="0%" stopColor="rgba(232,121,249,1)" />
                  <stop offset="25%" stopColor=" rgba(238,102,225,1)" />
                  <stop offset="53%" stopColor="rgba(244,81,198,1)" />
                  <stop offset="64%" stopColor="rgba(246,73,187,1)" />
                  <stop offset="72%" stopColor="rgba(248,67,179,1)" />
                  <stop offset="100%" stopColor="rgba(255,46,152,1)" />
                </linearGradient>
              </defs>
              <rect
                className="about-small-rhombus-fill-pink"
                x="6.63"
                y="6.63"
                width="32.02"
                height="32.02"
                transform="translate(-9.38 22.64) rotate(-45)"
              />
            </svg>
            <div>
              <Markup content='מומחית תוכן:<br><span class="colored-text listener-colored-text-pink">סמל הילה אופק' />
            </div>
          </div>
          <div className="single-rhombus-container">
            <svg
                ref={rhumbRef2}
                id="2"
                onMouseEnter={()=>{gsap.to(rhumbRef2.current,{y:"-5", ease:"spin", duration:1});}}
                onMouseLeave={()=>{gsap.to(rhumbRef2.current,{y:"5", ease:"spin", duration:1});}}
              className="about-page-rhombus rhombus2"
              viewBox="0 0 45.29 45.29"
            >
              <defs>
                <linearGradient
                  id="linear-gradient-about-page-purple"
                  x1="-6391.36"
                  y1="2800.38"
                  x2="-6373.38"
                  y2="2838.95"
                  gradientTransform="translate(6405.01 -2797.02)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(188,153,255,1)" />
                  <stop offset="25%" stopColor="rgba(179,115,255,1)" />
                  <stop offset="49%" stopColor=" rgba(170,78,255,1)" />
                  <stop offset="68%" stopColor="rgba(163,49,255,1)" />
                  <stop offset="100%" stopColor="rgba(150,0,255,1)" />
                </linearGradient>
              </defs>
              <rect
                className="about-small-rhombus-fill-purple"
                x="6.63"
                y="6.63"
                width="32.02"
                height="32.02"
                transform="translate(-9.38 22.64) rotate(-45)"
              />
            </svg>
            <div>
              <Markup content='מאפיינות:<br><span class="colored-text listener-colored-text-blue">רב"ט ריטה ברזובסקי </span><br><span class="colored-text listener-colored-text-purple"> רב"ט זוהר סלע</span> ' />
            </div>
          </div>
          <div className="single-rhombus-container">
            <svg
                ref={rhumbRef3}
                id="3"
                onMouseEnter={()=>{gsap.to(rhumbRef3.current,{y:"-5", ease:"spin", duration:1});}}
                onMouseLeave={()=>{gsap.to(rhumbRef3.current,{y:"5", ease:"spin", duration:1});}}
              className="about-page-rhombus rhombus3"
              viewBox="0 0 45.29 45.29"
            >
              <defs>
                <linearGradient
                  id="linear-gradient-blue"
                  x1="-6391.36"
                  y1="2800.38"
                  x2="-6373.38"
                  y2="2838.95"
                  gradientTransform="translate(6405.01 -2797.02)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(139,233,253,1)" />
                  <stop offset="19%" stopColor="rgba(113,210,249,1)" />
                  <stop offset="43%" stopColor="rgba(80,180,243,1)" />
                  <stop offset="52%" stopColor="rgba(67,169,241,1)" />
                  <stop offset="100%" stopColor="rgba(0,111,231,1)" />
                </linearGradient>
              </defs>
              <rect
                className="about-small-rhombus-fill-blue"
                x="6.63"
                y="6.63"
                width="32.02"
                height="32.02"
                transform="translate(-9.38 22.64) rotate(-45)"
              />
            </svg>
            <div>
              <Markup content='מפתחות:<br><span class="colored-text listener-colored-text-blue">רב"ט ריטה ברזובסקי </span><br><span class="colored-text listener-colored-text-purple"> רב"ט זוהר סלע</span> ' />
            </div>
          </div>
          <div className="single-rhombus-container">
            <svg
                ref={rhumbRef4}
                id="4"
                onMouseEnter={()=>{gsap.to(rhumbRef4.current,{y:"-5", ease:"spin", duration:1});}}
                onMouseLeave={()=>{gsap.to(rhumbRef4.current,{y:"5", ease:"spin", duration:1});}}
              className="about-page-rhombus rhombus4"
              viewBox="0 0 45.29 45.29"
            >
              <defs>
                <linearGradient
                  id="linear-gradient-green"
                  x1="-6391.36"
                  y1="2800.38"
                  x2="-6373.38"
                  y2="2838.95"
                  gradientTransform="translate(6405.01 -2797.02)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgba(128,255,179,1)" />
                  <stop offset="21%" stopColor="rgba(95,231,166,1)" />
                  <stop offset="48%" stopColor="rgba(61,206,152,1)" />
                  <stop offset="59%" stopColor="rgba(29,183,139,1)" />
                  <stop offset="100%" stopColor="rgba(0,162,127,1)" />
                </linearGradient>
              </defs>
              <rect
                className="about-small-rhombus-fill-green"
                x="6.63"
                y="6.63"
                width="32.02"
                height="32.02"
                transform="translate(-9.38 22.64) rotate(-45)"
              />
            </svg>
            <div>
              <Markup content='גרפיקאית:<br><span class="colored-text listener-colored-text-green">סמל דנה פסקין </span>' />
            </div>
          </div>
        </div>
        <h1 className="main-title about-page-titles">מי אנחנו</h1>
        <div className="about-us-text">
          <Markup content='<span class="colored-text"> צוות </span><span class="colored-text listener-colored-text-green">מ</span><span class="colored-text listener-colored-text-pink">א</span><span class="colored-text listener-colored-text-green">"</span><span class="colored-text listener-colored-text-purple">ה </span> - <span class="colored-text listener-colored-text-green">מ</span>ולטימדיה ו<span class="colored-text listener-colored-text-pink">א</span>ינטרקטיביות ב<span class="colored-text listener-colored-text-purple">ה</span>דרכה.<br>הצוות פועל ליצירת חווית למידה חדשנית <span class="colored-text">שבמרכזה עומד הלומד</span><br><br>הקסם קורה בזכות אנשי הצוות שלא מתפשרים על איכות התוצר <br> והמולטימדיה שמביאה איתה <span class="colored-text">אין ספור הזדמנויות</span>.' />
        </div>
        <Btn classForStartOver="start-over-btn" handleClick={handleStartOver} buttonText="בחזרה ללומדה" />
      </div>
    </div>
  );
}

export default AboutPage;
