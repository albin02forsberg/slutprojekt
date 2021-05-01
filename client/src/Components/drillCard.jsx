import react from "react";

function DrillCard(prop) {
  let link = "/drill/" + prop.id;
  return (
      <div className="card" onClick={()=> window.location.replace(link)}>
        <div className="card-body">
          <h4 className="card-title">
            <a href={link}>{prop.name}</a>
          </h4>
          <div className="card-text">
            <p>{prop.type}: {prop.moment}</p> 
            <p>{prop.level}</p> 
          </div>
        </div>
        <div className="card-footer">{prop.created} </div>
      </div>
  );
}

export default DrillCard;
