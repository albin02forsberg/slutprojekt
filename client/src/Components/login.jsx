import axios from "axios";
import react, { useState } from "react";
import { Redirect } from "react-router";
import home from "./home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let user = {
    username: username,
    password: password,
  };

  if (sessionStorage.getItem("User") != "null") {
    window.location.replace("http://localhost:3000/");
  }

  function handleChange(event) {
    event.preventDefault();
    let n = event.target.name;
    let value = event.target.value;

    if (n == "username") {
      setUsername(value);
    }
    if (n == "password") {
      setPassword(value);
    }

    user.username = username;
    user.password = password;

    console.log(user);
  }

  return (
    <div className="col-md-12">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Användarnamn</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={user.username}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-success form-control"
            onClick={() => {
              userLogin(user);
            }}
          >
            Logga in
          </button>
        </div>
      </form>
    </div>
  );
}

function userLogin(user) {
  axios
    .get("http://localhost:3001/api/signin", {
      params: {
        username: user.username,
        password: user.password,
      },
    })
    .then(function (response) {
      console.log(response.data);
      if (response.data) {
        sessionStorage.setItem("User", response.data.username);
        window.location.replace("http://localhost:3000/");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default Login;
