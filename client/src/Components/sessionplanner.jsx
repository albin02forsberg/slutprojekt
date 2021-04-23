import axios from "axios";
import React, { useState, useEffect } from "react";

function SessionPlanner() {
  const [session, setSession] = useState([]);
  const [userDrills, setUserdrills] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/userdrills", {
        params: {
          username: sessionStorage.getItem("User"),
        },
      })
      .then((response) => setUserdrills(response.data));
  }, []);

  return (
    <div className="container">
      <div className="col-md-12">
        <h1>Träningsplaneraren</h1>

        <h2>Mina övningar</h2>

        <form>
          <div className="form-group">
            <label htmlFor="search">Sök övning</label>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
              placeholder="Sök övning"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary from-control">Sök</button>
          </div>
        </form>

        <table className="table">
          <thead>
            <th>Namn</th>
            <th>Nivå</th>
            <th>Typ</th>
            <th>Moment</th>
            <th>Välj</th>
          </thead>
          <tbody>
            {userDrills.map((element) => {
              let link = "/drill/" + element._id;
              return (
                <tr>
                  <td>
                    <a href={link}>{element.name}</a>
                  </td>
                  <td>{element.level}</td>
                  <td>{element.type}</td>
                  <td>{element.moment}</td>
                  <td>
                    <input
                      type="checkbox"
                      name="add"
                      id="add"
                      value={element._id}
                      onChange={(event) => {
                        if (event.target.checked) {
                          session.push(element._id);
                        } else {
                          session.pop(element._id);
                        }
                        console.log(session);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form>
          <div className="from-group">
            <button
              className="btn btn-success"
              type="button"
              onClick={() => {
                sessionStorage.setItem("session", JSON.stringify(session));
                let i = sessionStorage.getItem("session");
                console.log(i);
              }}
            >
              Skapa träningspass
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SessionPlanner;
