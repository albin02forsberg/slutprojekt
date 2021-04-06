import react, {useState, useEffect} from "react";
import axios from "axios";
import "../App.css";

function Home() {
  const [test, testSet] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/testAPI")
      .then(function (response) {
        // handle success
        testSet(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        testSet(error.data);
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div> 
        <h1>Welcome! {test}</h1>
      </div>
    </div>
  );
} 

export default Home;