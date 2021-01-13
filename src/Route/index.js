import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from "../Pages/Home";

export default function ParamsExample() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
                <App />
            </Route>
          </Switch>
      </Router>
    );
  }
