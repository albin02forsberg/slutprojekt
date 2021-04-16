import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// Components
import Modal from "./modal";

function Drill() {
  const { id } = useParams();
  const [drill, setDrill] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getdrill", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDrill(response.data);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="col-md-6">
        <h1>{drill.name || "Ingen övning hittat"}</h1>

        <h2>Information</h2>

        <table className="table table-md-responsive">
          <thead>
            <th>Nivå</th>
            <th>Typ</th>
            <th>Moment</th>
          </thead>
          <tbody>
            <tr>
              <td>{drill.level}</td>
              <td>{drill.type}</td>
              <td>{drill.moment}</td>
            </tr>
          </tbody>
        </table>
        <Button username={drill.creator} id={id} />
      </div>
    </div>
  );
}

function Button(drill) {
  if (drill.username == sessionStorage.getItem("User")) {
    return (
      <div className="btn-group">
        <button className="btn btn-primary">Redigera</button>
        <button
          type="button"
          class="btn btn-danger"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <Modal
          title="Radera"
          type="danger"
          text="Är du säker på att du vill radera denna övningen?"
          id={drill.id}
          db="drill"
          action="del"
        />
      </div>
    );
  } else {
    return "";
  }
}

export default Drill;
