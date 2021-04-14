import react from "react";

function Excercise(prop) {
  let link = "/" + prop.name;
  return (
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            <a href={link}>{prop.name}</a>
          </h4>
          <p class="card-text">
            {prop.type} <br/>
            {prop.moment} <br/>
            {prop.level} <br/>
          </p>
        </div>
        <div className="card-footer">{prop.created}</div>
      </div>
  );
}

export default Excercise;
