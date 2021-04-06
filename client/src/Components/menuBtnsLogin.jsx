import react, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function IsLoggedin() {
  if (sessionStorage.getItem("User") == "Account") {
    return (
      <ul className="nav-list">
        <li className="nav-link">
          <Link to="/login">
            <button>Logga in</button>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/signup">
            <button>Skapa konto</button>
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="nav-list">
        <li className="nav-link">
          <Link to="/account">
            <button>Account</button>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/logout">
            <button>Logga ut</button>
          </Link>
        </li>
      </ul>
    );
  }
}

export default IsLoggedin;
