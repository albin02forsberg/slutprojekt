import react, { useState, useEffect } from "react";
import axios from "axios";
import Excercise from "./drillCard";
import "../static/App2.css";

// Components
import Drills from "./drills";

function Home() {
  const [display, setDisplay] = useState("Övningar");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Flöde</h1>
          <div className="btn-group bnt-group-lg">
            <button
              className="btn btn-secondary"
              id="btn-ex"
              onClick={() => {
                setDisplay("Övningar");
              }}
            >
              Övningar
            </button>
            <button
              className="btn btn-secondary"
              id="btn-train"
              onClick={() => {
                setDisplay("Träningspass");
              }}
            >
              Träningspass
            </button>
          </div>
        </div>
        <div className="col-md-12">
          <h2>{display}</h2>
          <div className="card-columns">
            <View name={display} />
          </div>
        </div>
      </div>
    </div>
  );
}

function View(props) {
  if (props.name == "Övningar") {
    return <Drills />;
  }
  return <h2>{props.name}</h2>;
}

export default Home;
