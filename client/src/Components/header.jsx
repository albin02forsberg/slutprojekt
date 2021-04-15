import react, { useState, useEffect } from "react";
import IsLoggedin from "../Components/menuBtnsLogin";
import "../static/App2.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

let login = false;

function Header() {
  const [username, setUsername] = useState(sessionStorage.getItem("User"));
  const [show, setShow] = useState("hide");
  const [btnText, setBtnText] = useState("Hide");

  if (username.length < 10) {
    login = false;
  }

  useEffect(() => {
    if (show == "show") {
      setBtnText("Hide");
    } else {
      setBtnText("Show");
    }
    return () => {
      console.log("Nav toggled");
    };
  }, [show]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Title
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Flöde
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/drillcreator">
              Övningskaparen
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/excercise">
              Träninsplaneraren
            </a>
          </li>
        </ul>
        <ul className="navbar-nav my-2 my-lg-0">
          <IsLoggedin />
        </ul>
      </div>
    </nav>
  );
}

export default Header;
