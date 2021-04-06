import react from "react";
import "../static/App.css"

function Excercise(prop) {
  return (
    <div className="excercise">
      <div className="row">
        <div>{prop.name}</div>
        <div>{prop.focus}</div>
        <div>{prop.user}</div>
      </div>
    </div>
  );
}

export default Excercise;
