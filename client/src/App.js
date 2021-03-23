import React from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const name = this.state;

    axios
      .post('http://localhost:3001/testAPI', name)
      .then(() => document.getElementById("name").nodeValue = "")
      .catch(err => {
        console.error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <h1>{this.state.apiResponse}</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            </label>
          <input type="text" id="name" name="name" onChange={this.handleInputChange}></input>

          <button>
            Sumbit
            </button>
        </form>

        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default App;
