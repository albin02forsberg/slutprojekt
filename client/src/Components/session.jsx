import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
      <div className="col-md-6">
        <h2>
          {session.name} - 
        </h2>
        <h2>
            {session.moment}
        </h2>

        <h3>Beskrivning</h3>

        <p>
          <b>Nivå: </b> {session.level}
        </p>
        <p>
          <b>Antal övningar i passet: </b> {drills.length}
        </p>

        <p>{session.description}</p>
      </div>
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
                  <td>{element.name}</td>
                  <td>{element.moment}</td>
                  <td>{element.level}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {drills.map((element) => {
          let img = "http://localhost:3001/public/images/" + element.id + "png";
        return (
          <div className="row">
            <div className="col-md-6">
              <h3>{element.name}</h3>

            </div>
            <div className="col-md-6">
                <img src={img} alt="img"/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Session;
