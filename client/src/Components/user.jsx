import react, { useState, useEffect } from "react";
import axios from "axios";
import DrillCard from "./drillCard";
import SessionCard from "./sessionCard";

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
  const [session, setSession] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/userdrills", {
        params: {
          username: user,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDrill(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

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

    axios
      .get("http://localhost:3001/api/usersessions", {
        params: {
          username: user,
        },
      })
      .then((result) => {
        setSession(result.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>{acc || "Page not found"}</h1>
          <h2>Övningar</h2>
          <div className="card-columns">
            {drills.map((element) => {
              return (
                <DrillCard
                  name={element.name}
                  created={element.created}
                  type={element.type}
                  moment={element.moment}
                  creator={element.creator}
                  id={element._id}
                  level={element.level}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-12">
          <h2>Träningspass</h2>
          {session.map((element) => {
            return (
              <SessionCard
                name={element.name}
                moment={element.moment}
                drills={element.drills}
                id={element._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default User;
