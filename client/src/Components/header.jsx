import react, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Header() {
  const [username, setUsername] = useState("Account");
  return (
    <div>
      <nav className="nav">
        <div className="banner">
          <h1 className="bannerName">
            <Link to="/">Coach Network</Link>
          </h1>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-link">
              <Link to="/">Feed</Link>
            </li>
            <li className="nav-link">
              <Link to="/excercise">Excercise creator</Link>
            </li>
            <li className="nav-link">
              <Link to="/trainingplanner">Training planner</Link>
            </li>
          </ul>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-link">
              <Link to="/signup">Sign up</Link>
            </li>
            <li className="nav-link">
              <Link to="/account">{username}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
