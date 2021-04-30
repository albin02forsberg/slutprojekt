import axios from "axios";
import react, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayMsg, setDisplayMsg] = useState("none");

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
    <div className="container">
      <div className="col-md-12">
        <h1>Logga in</h1>
        <div
          className="alert alert-info"
          id="information"
          style={{ display: displayMsg }}
        ></div>
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
    .then((response)=> {
      console.log(response.data);
      if (response.data != null) {
        sessionStorage.setItem("User", response.data.username);
        window.location.replace(
          "http://localhost:3000/user/" + response.data.username
        );
      } else {
        document.getElementById("information").style = "display: block";
        document.getElementById("information").innerHTML =
          "<p>Invalid username or password</p>";
      }
    })
    .then(() => {});
}

export default Login;
