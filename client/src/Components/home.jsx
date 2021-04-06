import react, {useState, useEffect} from "react";
import axios from "axios";
import "../static/App.css";
import Excercise from "../Components/excercise"


function Home() {
  const [apiTest, setAPItest] = useState("");

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
    <div className="container">
      <div className="main"> 
        <h1>Övningar</h1>
        <Excercise name="test" focus="Focus" user="User"/>
      </div>
      <div className="main"> 
        <h1>Träningspass</h1>
      </div>
    </div>
  );
} 

export default Home;