import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// Import components

import Singup from "./Components/signup";
import Home from "./Components/home";
import Login from "./Components/login";

export default function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-xl navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse show" id="navbarTogglerDemo1">
            <a class="navbar-brand" href="/">
              Coach Network
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-xl-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Feed
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/createex">
                  Exercise creator
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/trainingplanner"
                >
                  Training planner
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                <li class="nav-item">
                  <a class="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signup">
                    signup
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/account">
                    My account
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Singup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function test() {
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let mail = document.getElementById("mail").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  let messageBox = document.getElementById("message");
  let message = "";

  let user = {
    name: name,
    username: username,
    mail: mail,
    password1: password1,
    password2: password2,
  };

  if (password1 != password2) {
    message += "<p> Passwords don't match </p>";
  }
  if (mail != "albin") {
    message += "<p>A account is already associated with that email </p>";
  }

  messageBox.innerHTML = message;

  // Send get request to server for validation of username and email

  axios.get("http://localhost:3001/testAPI").then((res) => {
    console.log(res.data);
  });

  // Post data to server for db and auth if user details meets criteria
  axios.post("http://localhost:3001/testAPI", user);
  console.log(user);
}
