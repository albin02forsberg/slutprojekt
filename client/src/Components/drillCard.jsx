import react, { useEffect, useState } from "react";

function DrillCard(prop) {
  let link = "/drill/" + prop.id;

  const [date] = useState("");

  const [showImg, setShowImg] = useState(false);

  return (
    <div className="card">
      {showImg && (
        <img
          src={"http://localhost:3001/public/images/drills/" + prop.img}
          alt="img"
          className="card-img-top"
        />
      )}
      <div className="card-body" onClick={() => window.location.replace(link)}>
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
      <div className="card-footer">
        {prop.created.substring(0, 10)} - Skapad av
        <a href={"http://localhost:3000/user/" + prop.creator}>
          {" " + prop.creator}
        </a>
      </div>
    </div>
  );
}

export default DrillCard;
