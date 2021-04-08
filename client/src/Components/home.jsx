import react, { useState, useEffect } from "react";
import axios from "axios";
import "../static/App.css";
import Excercise from "../Components/excercise";

function Home() {
  const [apiTest, setAPItest] = useState("");
  const [display, setDisplay] = useState("Övningar");

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
      <h1>Flöde</h1>
      <div className="buttons">
        <button id="btn-ex" onClick={()=>{
          setDisplay("Övningar")
        }}>Övningar</button>
        <button id="btn-train" onClick={()=>{
          setDisplay("Träningspass")
        }}>Träningspass</button>
      </div>
      <div className="display">
        <Test name={display}/>
      </div>
    </div>
  );
}

function Test(props){
  
  return(
    <h2>{props.name}</h2>
  )
}

export default Home;
