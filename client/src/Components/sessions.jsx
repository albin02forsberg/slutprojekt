import axios from "axios";
import React, { useEffect, useState } from "react";

// Components
import SessionCard from "./sessionCard";

function Sessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/getsessions").then((response) => {
      setSessions(response.data);
      console.log(sessions);
    });
  }, []);
  return (
    <div>
      {sessions.map((element) => {
        return (
          <SessionCard
            name={element.name}
            moment={element.moment}
            drills={element.drills}
            id={element._id}
          />
        );
      })}
    </div>
  );
}

export default Sessions;
