import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CreateDrop from "./../../components/createDrop/CreateDrop";

function NavBar(props) {
  const [lastPageEntered, setLastPageEntered] = useState(0);

  useEffect(() => {
    if (props.isFirstRound && props.page > lastPageEntered) {
      setLastPageEntered(props.page);
    }
  }, [props.page]);

  useEffect(() => {
    if (!props.isFirstRound) {
      setLastPageEntered(21);
    }
  }, [lastPageEntered]);

  return (
    <div className="navbar-div">
      <nav className="navbar-nav">
        <ul className="navbar-ul">
          <li className="nav first-link">
            <Link
              to={"/intro"}
              className={`nav-link nav-text ${props.page === 2 && "current-first-link current-link"}`}
            >
              מבוא
            </Link>
          </li>
          <li className="nav">
            {lastPageEntered < 3 ? (
              <p className="nav-p nav-text">אירועים</p>
            ) : (
              <div className="link-drop-container">
                <Link
                  to={"/event-types"}
                  className={`nav-link nav-text ${
                    props.page > 2 && props.page < 9 && "current-link"
                  }`}
                >
                  אירועים
                </Link>
                <CreateDrop
                  lastPageEntered={lastPageEntered}
                  firstNavPage={3}
                />
              </div>
            )}
          </li>
          <li className="nav">
            {lastPageEntered < 9 ? (
              <p className="nav-p nav-text">מאזינים</p>
            ) : (
              <div className="link-drop-container">
                <Link
                  to={"/event-listeners"}
                  className={`nav-link nav-text ${
                    props.page > 8 && props.page < 14 && "current-link"
                  }`}
                >
                  מאזינים
                </Link>
                <CreateDrop
                  lastPageEntered={lastPageEntered}
                  firstNavPage={9}
                />
              </div>
            )}
          </li>
          <li className="nav">
            {lastPageEntered < 14 ? (
              <p className="nav-p nav-text">פונקציות</p>
            ) : (
              <div className="link-drop-container">
                <Link
                  to={"/functions"}
                  className={`nav-link nav-text ${
                    props.page > 13 && props.page < 20 && "current-link"
                  }`}
                >
                  פונקציות
                </Link>
                <CreateDrop
                  lastPageEntered={lastPageEntered}
                  firstNavPage={14}
                />
              </div>
            )}
          </li>
          <li className="nav last-link">
            {lastPageEntered < 20 ? (
              <p className="nav-p nav-text ">event</p>
            ) : (
              <div className="link-drop-container">
                <Link
                  to={"/event"}
                  className={`nav-link nav-text ${
                    props.page > 19 && props.page < 22 && "current-link"
                  }`}
                >
                  EVENT
                </Link>
                <CreateDrop
                  lastPageEntered={lastPageEntered}
                  firstNavPage={20}
                />
              </div>
            )}
          </li>
        </ul>
      </nav>
      <hr className="nav-hr"></hr>
    </div>
  );
}

export default NavBar;
