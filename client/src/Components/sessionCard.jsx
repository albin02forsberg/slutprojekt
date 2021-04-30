import React, { useState } from "react";

function SessionCard(props) {
  let count = props.drills.length;
  let link = "/session/" + props.id;
  return (
    <div className="card" onClick={() => window.location.replace(link)}>
      <div className="card-body">
        <h4 className="card-title">
          <a href={link}>{props.name}</a>
        </h4>
        <div className="card-text">
          <p>{props.moment}</p>
          <p>Antal övningar: {count}</p>
        </div>
      </div>
    </div>
  );
}

export default SessionCard;
