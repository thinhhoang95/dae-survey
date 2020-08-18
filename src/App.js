import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Survey } from "./screens/survey";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Thanks } from "./screens/thanks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/thanks" component={Thanks}></Route>
          <Route path="/:id" component={Survey}></Route>
          <Route path="/" component={Survey}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
