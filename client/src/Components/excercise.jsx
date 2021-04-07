import react from "react";
import "../static/App.css";

function Excercise(prop) {
  return (
    <tr>
      <td>{prop.name}</td>
      <td>{prop.focus}</td>
      <td>{prop.user}</td>
      <td>{toString(Date)}</td>
    </tr>
  );
}

export default Excercise;
