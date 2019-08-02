import React from "react";
import "./App.css";

import Heading from "./components/heading";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div>
        <Heading />
      </div>
      <div className="page-container" />
      <div className="donut-background">
        <img
          src="https://images-gmi-pmc.edge-generalmills.com/9c8e5dc4-2883-4fff-97b2-ed778822c2e5.jpg"
          alt="donut-pic"
        />
      </div>
      <div className="todays-suggestions">
        <h1>Today's Suggestions</h1>
        <div className="suggestions">Suggestions go here</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
