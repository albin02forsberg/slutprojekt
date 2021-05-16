import axios from "axios";
import React, { useEffect, useState } from "react";

// Components
import DrillCard from "./drillCard";

function Drills(prop) {
  const [drills, setDrills] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/getdrills").then((response) => {
      setDrills(response.data);
      console.log(drills);
    });
  }, []);
  return (
    <div>
      {drills.map((element) => {
        if ((element.name != "")) {
          return (
            <DrillCard
              name={element.name}
              created={element.created}
              type={element.type}
              moment={element.moment}
              creator={element.creator}
              id={element._id}
              level={element.level}
              creator={element.creator}
              img={element.img}
              preview={prop.preview}
            />
          );
        }
      })}
    </div>
  );
}

export default Drills;
