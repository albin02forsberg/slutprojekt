import react, { useEffect, useState } from "react";

function DrillCard(prop) {
  let link = "/drill/" + prop.id;

  let [date] = useState("");

  return (
    <div className="card" onClick={() => window.location.replace(link)}>
      <div className="card-body">
        <h4 className="card-title">
          <a href={link}>{prop.name}</a>
        </h4>
        <div className="card-text">
          <p>
            {prop.type}: {prop.moment}
          </p>
          <p>{prop.level}</p>
        </div>
      </div>
      <div className="card-footer">{prop.created.substring(0,10)} - <a href={"http://localhost:3000/user/" + prop.creator}>{prop.creator}</a></div>
    </div>
  );
}

export default DrillCard;
