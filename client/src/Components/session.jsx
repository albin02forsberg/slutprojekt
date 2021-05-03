import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
import Modal from "./modal";

function Session() {
  const { id } = useParams();
  const [session, setSession] = useState({});
  const [drills, setDrills] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getsession", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        setSession(response.data.session);
        setDrills(response.data.drills);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{session.name} -</h2>
          <h2>{session.moment}</h2>

          <p>
            <b>Skapad av:</b>{" "}
            <a href={"/user/" + session.creator}>
              {session.creator}
            </a>
          </p>

          <hr />

          <h3>Beskrivning: </h3>

          <p>{session.description}</p>

          <p>
            <b>Nivå: </b> {session.level}
          </p>
          <p>
            <b>Antal övningar i passet: </b> {drills.length}
          </p>

          <Button username={session.creator} id={id} db="session" />
          <hr />
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-12">
          <h3>Övningar i träninspasset</h3>
          <table className="table">
            <thead>
              <th>Namn</th>
              <th>Moment</th>
              <th>Nivå</th>
            </thead>
            <tbody>
              {drills.map((element) => {
                return (
                  <tr>
                    <td>
                      <a href={"#" + element.name}>{element.name}</a>
                    </td>
                    <td>{element.moment}</td>
                    <td>{element.level}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {drills.map((element) => {
        let img = "http://localhost:3001/public/images/" + element._id + ".png";
        return (
          <div className="row">
            <div className="col-md-6">
              <h3 id={element.name}>{element.name}</h3>

              <h4>Beskrivning</h4>
              <p>{element.description}</p>

              <h4>Syfte</h4>
              <p>{element.explenation}</p>

              <h4>Förklaring</h4>
              <p>{element.description}</p>
              <h4>Organisation</h4>
              <p>{element.organization}</p>
              <hr />
            </div>
            <div className="col-md-6">
              <img
                className="img-thumbnail"
                src="http://localhost:3001/public/images/pitch.png"
                alt={img}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Button(props) {
  if (props.username == sessionStorage.getItem("User")) {
    return (
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => {
            window.location.replace(
              "http://localhost:3000/createsession/" + props.id
            );
          }}
        >
          Redigera
        </button>
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          radera
        </button>
        <Modal
          title="Radera"
          type="danger"
          text="Är du säker på att du vill radera detta träningspasset?"
          id={props.id}
          db="session"
          action="del"
        />
      </div>
    );
  } else {
    return "";
  }
}

export default Session;
