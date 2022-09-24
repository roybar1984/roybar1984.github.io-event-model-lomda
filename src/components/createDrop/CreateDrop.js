import React from "react";
import { Link } from "react-router-dom";
import "./CreateDrop.css";

function CreateDrop(props) {
    return (
      <ul className="nav-drop">
        {props.firstNavPage === 3 ? (
          <div>
            <li className="nav-submenu-item ">
              {props.lastPageEntered <= 3 ? (
                <p className="nav-p nav-menu-item nav-menu-item">אירועי עכבר</p>
              ) : (
                <Link
                  to={"/event-types/mouse-events"}
                  className="nav-link nav-menu-item"
                >
                  אירועי עכבר
                </Link>
              )}
            </li>
            <li className="nav-submenu-item ">
              {props.lastPageEntered < 7 ? (
                <p className="nav-p nav-menu-item">אירועי INPUT</p>
              ) : (
                <Link
                  to={"/event-types/input-events"}
                  className={`nav-link nav-menu-item }`}
                >
                  אירועי INPUT
                </Link>
              )}
            </li>
            <li className="nav-submenu-item ">
              {props.lastPageEntered < 8 ? (
                <p className="nav-p nav-menu-item">אירוע טעינה</p>
              ) : (
                <Link
                  to={"/event-types/load-event"}
                  className={`nav-link nav-menu-item }`}
                >
                  אירוע טעינה
                </Link>
              )}
            </li>
          </div>
        ) : props.firstNavPage === 9 ? (
          <div>
            <li className="nav-submenu-item ">
              {props.lastPageEntered < 10 ? (
                <p className="nav-p nav-menu-item">הצמדת מאזין</p>
              ) : (
                <Link
                  to={"/event-listeners/add-event-listeners"}
                  className={`nav-link nav-menu-item }`}
                >
                  הצמדת מאזין
                </Link>
              )}
            </li>
            <li className="nav-submenu-item ">
              {props.lastPageEntered < 12 ? (
                <p className="nav-p nav-menu-item">הסרת מאזין</p>
              ) : (
                <Link
                  to={"/event-listeners/remove-event-listener"}
                  className={`nav-link nav-menu-item }`}
                >
                  הסרת מאזין
                </Link>
              )}
            </li>
          </div>
        ) : props.firstNavPage === 14 ? (
          <div>
            <li className="nav-submenu-item ">
              {props.lastPageEntered < 15 ? (
                <p className="nav-p nav-menu-item">פונקציה אנונימית</p>
              ) : (
                <Link
                  to={"/anonymous-functions"}
                  className={`nav-link nav-menu-item }`}
                >
                  פונקציה אנונימית
                </Link>
              )}
            </li>
            <li className="nav-submenu-item ">
              {props.lastPageEntered < 17 ? (
                <p className="nav-p nav-menu-item">arguments.callee</p>
              ) : (
                <Link
                  to={"/arguments.callee"}
                  className={`nav-link nav-menu-item }`}
                >
                  arguments.callee
                </Link>
              )}
            </li>
            <li className="nav-submenu-item ">
              {props.lastPageEntered < 19 ? (
                <p className="nav-p nav-menu-item">השוואה</p>
              ) : (
                <Link
                  to={"/function-comparison"}
                  className={`nav-link nav-menu-item }`}
                >
                  השוואה
                </Link>
              )}
            </li>
          </div>
        ) : (
          <div>
            <li className="nav-submenu-item ">
              {props.lastPageEntered < 21 ? (
                <p className="nav-p nav-menu-item">currentTarget</p>
              ) : (
                <Link
                  to={"/event/current-target"}
                  className={`nav-link nav-menu-item }`}
                >
                  currentTarget
                </Link>
              )}
            </li>
          </div>
        )}
      </ul>
    );
  }
  
  export default CreateDrop;