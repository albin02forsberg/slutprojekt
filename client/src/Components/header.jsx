import react, { useState, useEffect } from "react";
import "../static/App.css";
import IsLoggedin from "../Components/menuBtnsLogin"
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

  if (username.length < 10) {
    login = false;
  }

  console.log(login);

  return (
    <div className="header">
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
            <IsLoggedin/>
        </div>
      </nav>
    </div>
  );
}


export default Header;
