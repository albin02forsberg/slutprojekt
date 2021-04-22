import axios from "axios";
import React, { useState } from "react";

function SessionPlanner() {
  const [session, setSession] = useState([]);
  const [userDrills, setUserdrills] = useState([]);

  axios
    .get("http://localhost:3001/api/getdrills", {
      params: {
        username: sessionStorage.getItem("User"),
      },
    })
    .then((response) => console.log(response.data));

  return (
    <div className="container">
      <div className="col-md-12">
        <h1>Session planner</h1>
      </div>
    </div>
  );
}

export default SessionPlanner;
