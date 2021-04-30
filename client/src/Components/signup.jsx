import react, { useState } from "react";
import axios from "axios";

// Components
import Modal from "./modal";

function Singup() {
  const [userName, setUsername] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [displayMsg, setDisplayMsg] = useState("none");

  let user = {
    name: name,
    username: userName,
    mail: mail,
    password: password,
  };

  function handleChange(event) {
    event.preventDefault();
    let n = event.target.name;
    let value = event.target.value;

    if (n == "username") {
      setUsername(value);
    }
    if (n == "name") {
      setName(value);
    }
    if (n == "mail") {
      setMail(value);
    }
    if (n == "password") {
      setPassword(value);
    }

    user.name = name;
    user.username = userName;
    user.mail = mail;
    user.password = password;
  }

  return (
    <div className="container">
      <div className="col-md-12">
        <h1>Sign up</h1>

        <div
          className="alert alert-info"
          id="information"
          style={{ display: displayMsg }}
        ></div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={user.name}
              className="form-control"
            />
          </div>
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
            <label htmlFor="mail">Mail</label>
            <input
              type="text"
              name="mail"
              id="mail"
              onChange={handleChange}
              value={user.mail}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="form-control btn btn-success"
              onClick={() => {
                setDisplayMsg("block");
                sendUser(user);
              }}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
}

function sendUser(user) {
  // Validate

  let username = false;
  let mail = false;
  let message = "";

  axios
    .get("http://localhost:3001/api/validateuser", {
      params: {
        action: "username",
        username: user.username,
      },
    })
    .then(function (response) {
      console.log(response);
      if (response.data === "Ok!") {
        username = true;
        console.log(username);
      } else {
        username = false;
        console.log(username);
      }
    })
    .then(
      axios
        .get("http://localhost:3001/api/validateuser", {
          params: {
            action: "mail",
            mail: user.mail,
          },
        })
        .then(function (response) {
          if (response.data === "Ok!") {
            mail = true;
            console.log(mail);
          } else {
            mail = false;
            console.log(mail);
          }
        })
        .then(() => {
          if (mail && username) {
            //   Send user to server and db
            axios.post("http://localhost:3001/api/createuser", user);
            console.log("Test");
            document.getElementById("information").innerHTML =
              "<p>Account created</p>";
          } else {
            if (!mail) {
              message += "<p>Invalid mail</p>";
            }
            if (!username) {
              message += "<p>Invalid username</p>";
            }
            document.getElementById("information").innerHTML = message;
            console.log("ERROR when creating new user");
          }
        })
    );
}

export default Singup;
