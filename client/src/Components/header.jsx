import react, { useState, useEffect } from "react";
import IsLoggedin from "../Components/menuBtnsLogin";
import "../static/App2.css"
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
  const [show, setShow] = useState("hide");
  const [btnText, setBtnText] = useState("Hide");

  if (username.length < 10) {
    login = false;
  }

  useEffect(() => {
    if (show == "show") {
      setBtnText("Hide");
    } else {
      setBtnText("Show");
    }
    return () => {
      console.log("Nav toggled");
    };
  }, [show]);

  let className = show + " header";

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Title</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Flöde</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/drillcreator">Övningskaparen</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/excercise">Träninsplaneraren</a>
      </li>
    </ul>
    <ul class="navbar-nav my-2 my-lg-0">
      <IsLoggedin/>
    </ul>
  </div>
</nav>
  );
}

export default Header;
