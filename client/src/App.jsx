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

export default function App() {
  return (
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

