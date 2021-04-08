import react, { useState, useEffect } from "react";
import "../static/App.css";
import IsLoggedin from "../Components/menuBtnsLogin";
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
  const [show, setShow] = useState("show");
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

  let className = show + " header";

  return (
    <div className={className}>
      <nav className="nav">
        <div className="banner">
          <h1 className="bannerName">
            <Link to="/">Titel</Link>
          </h1>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-link">
              <Link to="/">
                <button>Flöde</button>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/excercise">
                <button>Övningsskaparen</button>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/trainingplanner">
                <button>Träningsplanerare</button>
              </Link>
            </li>
          </ul>
        </div>
        <h2 className="bannerName">
          <Link>Konto</Link>
        </h2>
        <div className="nav-links">
          <IsLoggedin />
        </div>
      </nav>

      <button
        id="btnShow"
        onClick={() => {
          if ( btnText  == "Show") {
            setBtnText("Hide");
            setShow("show")
          } else {
            setShow("hide")
            setBtnText("Show");
          }
        }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default Header;
