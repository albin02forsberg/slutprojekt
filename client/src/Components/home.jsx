import react, { useState, useEffect } from "react";
import axios from "axios";
import "../static/App.css";
import Excercise from "../Components/excercise";

function Home() {
  const [apiTest, setAPItest] = useState("");
  const [display, setDisplay] = useState("Excercise");

  useEffect(() => {
    axios
      .get("http://localhost:3001/testAPI")
      .then(function (response) {
        // handle success
        setAPItest(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        setAPItest(error.data);
        console.log(error);
      });
  }, []);

  return (
    <div className="main">
      <div className="buttons">
        <button onClick={()=>{
          setDisplay("Excersice")
        }}>Övningar</button>
        <button onClick={()=>{
          setDisplay("Training")
        }}>Träningspass</button>
      </div>
      <div className="display">
        <p>{display}</p>
      </div>
    </div>
  );
}

export default Home;
