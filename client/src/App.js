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

export default function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-xl navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo1"
            aria-controls="navbarTogglerDemo1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
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
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [test, testSet] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/testAPI")
      .then(function (response) {
        // handle success
        testSet(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div class="container">
      <div class="col-md-12">
        <h1>{test}</h1>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div class="container">
      <div class="col-md-12">
        <h1>Login</h1>
      </div>
    </div>
  );
}

function test() {
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let mail = document.getElementById("mail").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  let user = {
    name: name,
    username: username,
    mail: mail,
    password1: password1,
    password2: password2
  }

  // Send get request to server for validation

  axios.get("http://localhost:3001/testAPI")
    .then(res => {
      console.log(res.data)
    });

  // Post data to server for db and auth if user details meets criteria
  axios.post("http://localhost:3001/testAPI", user);
  console.log(user);
}

function Signup() {
  return (
    <div class="container">
      <div class="col-md-12">
        <h1>Signup</h1>
      </div>
      <div class="col-md-6">
        <lable class="form-lable">Name</lable>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          required
          placeholder="Name"
        ></input>
        <lable class="form-lable">Username</lable>
        <input
          type="text"
          class="form-control"
          id="username"
          name="username"
          required
          placeholder="Username"
        ></input>
        <lable class="form-lable">Mail</lable>
        <input
          type="email"
          class="form-control"
          id="mail"
          name="mail"
          required
          placeholder="Mail"
        ></input>
        <lable class="form-lable">Password</lable>
        <input
          type="password"
          class="form-control"
          id="password1"
          name="password1"
          required
          placeholder="password"
        ></input>
        <lable class="form-lable">Confirm password</lable>
        <input
          type="password"
          class="form-control"
          id="password2"
          name="password2"
          required
          placeholder="Confirm password"
        ></input>
        <br></br>
        <button class="btn btn-success" onClick={test}>
          Submit
        </button>
      </div>
    </div>
  );
}
