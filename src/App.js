import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Heading from "./components/heading";
import Footer from "./components/footer";
import Auth from "./pages/auth";

import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <Heading />
          </div>
          <div className="page-container" />
          <Homepage />
          <div>
            <Footer />
          </div>

          <Switch>
            <Route path="/auth" component={Auth} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
