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
    <div className="main">
      <h1>Login</h1>
      <div className="display">
        <form method="post" action="/">
          <table>
            <tr>
              <td>
                <label htmlFor="username">Användarnamn</label>
              </td>
              <td>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  value={user.username}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Lösenord</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={user.password}
                />
              </td>
            </tr>
          </table>
          <button
            type="button"
            onClick={() => {
              userLogin(user);
              <Redirect to exact="/" />;
            }}
          >
            Logga in
          </button>
        </form>
      </div>
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
      sessionStorage.setItem("User", response.data.username);
      if (response.data) {
        window.location.reload();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default Login;
