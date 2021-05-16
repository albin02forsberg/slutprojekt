import react, { useState } from "react";

// Components
import Drills from "./drills";
import Sessions from "./sessions";

import "../static/App2-min.css";
import "../static/App.css";

function Home() {
  const [display, setDisplay] = useState("Övningar");
  const [preview, setPreview] = useState(false);
  const [text, setText] = useState("Visa förhandsgranskning");

  return (
    <div className="container">
      <div className="row">
        <hr />
        <div className="col-md-6">
          {/* <h1>Flöde</h1> */}
          <br />
          <br />
          <div className="btn-group bnt-group-lg">
            <button
              className="btn btn-secondary btn-lg"
              id="btn-ex"
              onClick={() => {
                setDisplay("Övningar");
              }}
            >
              Övningar
            </button>
            <button
              className="btn btn-secondary btn-lg"
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
            <div className="form-group">
              <br />
              <button
                type="button"
                id="btnPre"
                className="btn btn-primary"
                onClick={() => {
                  if (preview) {
                    setPreview(false);
                    setText("Visa förhandsgranskning");
                  } else {
                    setPreview(true);
                    setText("Dölj förhandsgranskning");
                  }
                }}
              >
                {text}
              </button>
            </div>
          </form>
          <hr />
        </div>
        <div className="col-md-12">
          <h2>{display}</h2>
          <div className="card-columns">
            <View name={display} preview={preview} />
          </div>
        </div>
      </div>
    </div>
  );
}

function View(props) {
  if (props.name == "Övningar") {
    return <Drills preview={props.preview} />;
  } else {
    return <Sessions />;
  }
}

export default Home;
