import React, { useState } from "react";
import axios from "axios";

function DrillCreator() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Färdighetsövning");
  const [level, setLevel] = useState("11 mot 11");
  const [moment, setMoment] = useState("Aktivering");
  const [description, setDescription] = useState("");
  const [organization, setOrganization] = useState("");
  const [rules, setRules] = useState("");
  const [explenation, setExplenation] = useState("");

  let drill = {
    name: name,
    type: type,
    level: level,
    moment: moment,
    explenation: explenation,
    description: description,
    organization: organization,
    rules: rules,
    creator: sessionStorage.getItem("User"),
  };

  function handleChange(event) {
    event.preventDefault();
    let n = event.target.name;
    let value = event.target.value;

    switch (n) {
      case "name":
        setName(value);
        break;
      case "type":
        setType(value);
        break;
      case "level":
        setLevel(value);
        break;
      case "moment":
        setMoment(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "organization":
        setOrganization(value);
        break;
      case "explenation":
        setExplenation(value);
        break;
      case "rules":
        setRules(value);
        break;
      default:
        break;
    }

    drill.name = name;
    drill.type = type;
    drill.level = level;
    drill.moment = moment;
    drill.description = description;
    drill.organization = organization;
    drill.rules = rules;
    drill.explenation = explenation;
  }

  return (
    <div className="container">
      <div className="col-md-12">
        <h1>Skapa ny övning</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Namn på övningen"
              required
              onChange={handleChange}
              value={drill.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Typ av övning</label>
            <select
              name="type"
              className="form-control"
              id="type"
              required
              onChange={handleChange}
              value={drill.type}
            >
              <option value="Spelövning">Spelövning</option>
              <option value="Färdighetsövning">Färdighetsövning</option>
              <option value="Fysövning">Fysövning</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="level">Nivå</label>
            <select
              name="level"
              className="form-control"
              id="level"
              required
              onChange={handleChange}
              value={drill.level}
            >
              <option value="11 mot 11">11 mot 11</option>
              <option value="9 mot 9">9 mot 9</option>
              <option value="7 mot 7">7 mot 7</option>
              <option value="5 mot 5">5 mot 5</option>
              <option value="3 mot 3">3 mot 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="moment">Moment</label>
            <select
              name="moment"
              id="moment"
              className="form-control"
              required
              onChange={handleChange}
              value={drill.moment}
            >
              <optgroup label="Uppvärmning">
                <option value="Aktivering">Aktivering</option>
                <option value="Fotbollsrörlighet">Fotbollsrörlighet</option>
                <option value="Löpteknik">Löpteknik</option>
                <option value="Fotarbete">Fotarbete</option>
                <option value="Hoppa-landa-löp">Hoppa-landa-löp</option>
              </optgroup>
              <optgroup label="Anfallsspel">
                <option value="Speluppbyggnad">Speluppbyggnad</option>
                <option value="Kontring">Kontring</option>
                <option value="Komma till avlust och göra mål">
                  Komma till avslut och göra mål
                </option>
              </optgroup>
              <optgroup label="Försvarsspel">
                <option value="Explosiv träning">Explosiv träning</option>
                <option value="Förbättra och behålla återhämtningsförmågan mellan aktioner">
                  Förbättra och behålla återhämtningsförmågan mellan aktioner
                </option>
                <option value="Fotbollsstyrka">Fotbollsstyrka</option>
                <option value="Fotbollsrörlighet">Fotbollsrörlighet</option>
                <option value="Fotbollskoordination">
                  Fotbollskoordination
                </option>
                <option value="Lek">Lek</option>
              </optgroup>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="explination">Varför?</label>
            <textarea
              name="explenation"
              id="explenation"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Ange varför detta ska tränas kopplat till vad spelaren och laget ska förstärka eller förbättra. Exempelvis: Spelövning: spela sig ur press i speluppbyggnaden. Färdighetsövning:  förbättra tillslagstekniken inför spelet"
              required
              onChange={handleChange}
              value={drill.explenation}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="description">Beskrivning</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Beteenden/aktioner som gör att övningens vad uppfylls. För spelövning: Vad prioriteras i de aktuella skedena?  När ska spelarna agera? Vilket arbetssätt ska spelarna tillämpa? För färdighetsövning: Ange när och hur spelaren ska agera. Driv bollen framåt för att erövra tom yta."
              required
              onChange={handleChange}
              value={drill.description}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organisation</label>
            <textarea
              name="organization"
              id="organization"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Antal spelare (inklusive målvakter och jokrar), yta eller spelplan med mål, bollar, koner och västar. För spelövning: Lagens formation."
              required
              onChange={handleChange}
              value={drill.organization}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rules">Anvisningar</label>
            <textarea
              name="rules"
              id="rules"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Regler, förutsättningar och kort övningsbeskrivning. Vad är uppgiften?"
              required
              onChange={handleChange}
              value={drill.rules}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="picture">Bild</label>
            <input
              type="file"
              name="picture"
              id="picture"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="form-control btn-success"
              onClick={() => sendDrill(drill)}
            >
              Spara
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function sendDrill(drill) {
  axios.post("http://localhost:3001/api/newdrill", [
    drill,
    sessionStorage.getItem("User"),
  ]);
}

export default DrillCreator;
