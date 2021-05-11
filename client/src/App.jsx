import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import React components

import Singup from "./Components/signup";
import Home from "./Components/home";
import Login from "./Components/login";
import Header from "./Components/header";
import User from "./Components/user";
import DrillCreator from "./Components/drillCreator";
import Drill from "./Components/drill";
import SessionPlanner from "./Components/sessionplanner";
import Footer from "./Components/footer";
import CreateSession from "./Components/createSession";
import Session from "./Components/session";
import EditDrill from "./Components/editdrill";

export default function App() {
  if (sessionStorage.getItem("User") == null) {
    sessionStorage.setItem("User", null);
  } else {
    console.log("Userid: " + sessionStorage.getItem("User"));
  }

  return (
    <div className="content">
      <Router>
        {/* Inserting header */}
        <Header />
        {/* Setting up routes */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Singup />
          </Route>
          <Route path="/sessionplanner">
            <SessionPlanner />
          </Route>
          <Route path="/drillcreator">
            <DrillCreator />
          </Route>
          <Route path="/createsession/:id">
            <CreateSession />
          </Route>
          <Route path="/session/:id">
            <Session />
          </Route>
          <Route path="/drill/:id">
            <Drill />
          </Route>
          <Route path="/editdrill/:id">
            <EditDrill />
          </Route>
          <Route path="/user/:user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}
