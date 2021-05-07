import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import sendToServer from "../static/script/sendToServer";

function CreateSession() {
  const [session, setSession] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("11 mot 11");
  const [moment, setMoment] = useState("Speluppbyggnad");

  const { id } = useParams();

  let Session = {
    name: name,
    description: description,
    level: level,
    moment: moment,
    creator: sessionStorage.getItem("User"),
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getsession", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        setSession(response.data.drills);
        if (response.data.session.name != "") {
          setName(response.data.session.name);
          setLevel(response.data.session.level);
          setMoment(response.data.session.moment);
          setDescription(response.data.session.description);
        }
      });
  }, []);

  function handleChange(event) {
    event.preventDefault();
    let n = event.target.name;
    let value = event.target.value;

    switch (n) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "level":
        setLevel(value);
        break;
      case "moment":
        setMoment(value);
        break;
      default:
        break;
    }

    Session.name = name;
    Session.level = level;
    Session.moment = moment;
    Session.description = description;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Skapa träningspass</h1>
        </div>
        <div className="col-md-6">
          <p> Session id: {id}</p>
          <table className="table">
            <thead>
              <th>Namn</th>
              <th>Moment</th>
              <th>Nivå</th>
            </thead>
            <tbody>
              {session.map((element) => {
                return (
                  <GetDrill
                    name={element.name}
                    moment={element.moment}
                    level={element.level}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Träningspassets namn</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Skriv namn på träningspasset här"
                onChange={handleChange}
                value={Session.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="moment">Vad ska tränas?</label>
              <select
                name="moment"
                id="moment"
                className="form-control custom-select"
                onChange={handleChange}
                value={Session.moment}
              >
                <optgroup label="Anfallsspel">
                  <option value="Speluppbyggnad">Speluppbyggnad</option>
                  <option value="Kontring">Kontring</option>
                  <option value="Komma till avslut och göra mål">
                    Komma till avslut och göra mål
                  </option>
                </optgroup>
                <optgroup label="Försvarsspel">
                  <option value="Förhindra speluppbyggnad">
                    Förhindra speluppbyggnad
                  </option>
                  <option value="Återerövring av bollen">
                    Återerövring av bollen
                  </option>
                  <option value="Förhindra och rädda avslut">
                    Förhindra och rädda avslut
                  </option>
                </optgroup>
                <optgroup label="fotbollsfys">
                  <option value="Explosiv träning">Explosiv träning</option>
                  <option value="Förbättra och behålla återhämtningsförmågan">
                    Förbättra och behålla återhämtningsförmågan
                  </option>
                  <option value="Fotbollstyrka, rörlighet och koordination">
                    Fotbollsstyrka, rörlighet och koordination
                  </option>
                </optgroup>
                <optgroup label="Övrigt">
                  <option value="Lek">Lek</option>
                  <option value="Annat syfte">Annat syfte</option>
                </optgroup>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="level">Nivå</label>
              <select
                name="level"
                id="level"
                className="form-control custom-select"
                onChange={handleChange}
                value={Session.level}
              >
                <option value="11 mot 11">11 mot 11</option>
                <option value="9 mot 9">9 mot 9</option>
                <option value="7 mot 7">7 mot 7</option>
                <option value="5 mot 5">5 mot 5</option>
                <option value="3 mot 3">3 mot 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Beskrivning</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Skriv beskrivning av vad träningspasset ska gå ut på"
                onChange={handleChange}
                value={Session.description}
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-success form-control"
                onClick={() => {
                  if (checkSession(Session)) {
                    sendToServer(id, "session", Session, "update");
                  }
                }}
              >
                Spara
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function GetDrill(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.moment}</td>
      <td>{props.level}</td>
    </tr>
  );
}

function checkSession(session) {
  if (session.name.Length > 5) {
    return true;
  }
  return true;
}

export default CreateSession;
