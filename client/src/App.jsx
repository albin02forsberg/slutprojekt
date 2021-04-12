import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// Import React components

import Singup from "./Components/signup";
import Home from "./Components/home";
import Login from "./Components/login";
import Header from "./Components/header";
import User from "./Components/user";

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
          <Route path="/:user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
