import react, { useState } from "react";
import "../static/App2.css";

// Components
import Drills from "./drills";
import Sessions from "./sessions";

function Home() {
  const [display, setDisplay] = useState("Övningar");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
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
        <div className="col-md-6">
          <hr />
          <form>
            <div className="from-group">
              <input
                type="text"
                className="form-control"
                placeholder={"Sök efter " + display.toLowerCase()}
              />
            </div>
          </form>
          <hr/>
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
  } else {
    return <Sessions />;
  }
}

export default Home;
