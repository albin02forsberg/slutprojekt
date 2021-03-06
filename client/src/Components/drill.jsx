import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


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

  let link = "/user/" + drill.creator;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>{drill.name || "Ingen övning hittat"}</h1>

          <p>
            Skapad av <a href={link}>{drill.creator}.</a>
          </p>


          <Button username={drill.creator} id={id} />


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
          <h3>Varför?</h3>
          <p>{drill.explenation}</p>

          <h3>Beskrivning</h3>
          <p>{drill.description}</p>

          <h3>Förklaring</h3>
          <p>{drill.description}</p>
          <h3>Organisation</h3>
          <p>{drill.organization}</p>
        </div>
        <div className="col-md-6">
          <img
            className="img-thumbnail"
            src={"http://localhost:3001/public/images/drills/" + drill.img}
            alt=""
          />
        </div>
        <div className="col-md-12"></div>
        <div className="col-md-12">
        </div>
      </div>
    </div>
  );
}

function Button(props) {
  if (
    props.username == sessionStorage.getItem("User") ||
    sessionStorage.getItem("User") == "admin"
  ) {
    return (
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => {
            window.location.replace(
              "http://localhost:3000/editdrill/" + props.id
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
          text="Är du säker på att du vill radera denna övningen?"
          id={props.id}
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
