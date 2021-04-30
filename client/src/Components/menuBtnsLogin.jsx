import react, { useState, useEffect } from "react";

function IsLoggedin() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(sessionStorage.getItem("User"));
  }, [user]);

  let link = "/user/" + user;

  if (sessionStorage.getItem("User") == "null") {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Logga in
          </a>
        </li>
        <li className="nav-item">
          <a href="/signup" className="nav-link">
            Skapa konto
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href={link} className="nav-link">
            {user}
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link"
            onClick={() => {
              sessionStorage.setItem("User", null);
              window.location.reload();
            }}
          >
            Logga ut
          </a>
        </li>
      </ul>
    );
  }
}

export default IsLoggedin;
