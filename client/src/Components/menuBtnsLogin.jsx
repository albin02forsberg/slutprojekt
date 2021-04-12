import axios from "axios";
import react, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function IsLoggedin() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(sessionStorage.getItem("User"));
  }, [user]);

  console.log(user);

  let link = "/" + user;

  if (sessionStorage.getItem("User") == "null") {
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
          <Link to={link}>
            <button>{user}</button>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/logout">
            <button
              onClick={() => {
                sessionStorage.setItem("User", null);
                window.location.reload();
              }}
            >
              Logga ut
            </button>
          </Link>
        </li>
      </ul>
    );
  }
}

export default IsLoggedin;
