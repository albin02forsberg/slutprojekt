import react, { useState, useEffect } from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function User() {
  const [acc, setAcc] = useState("");
  const { user } = useParams();

  const [drills, setDrill] = useState([]);
  const [excer, setExcer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getuser", {
        params: {
          username: user,
        },
      })
      .then((result) => {
        setAcc(result.data.name);
      })
      .catch(() => {
        setAcc("Account not found");
      });
    return () => {
      console.log(user);
    };
  }, [user]);

  return (
    <div className="main">
      <h1>{acc || "Page not found"}</h1>
      <div className="display">
        <div className="row">
          <div>
            <h2>Övningar</h2>
          </div>
          <div>
            <h2>Träningspass</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
