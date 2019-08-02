import React from "react";
import "./App.css";

import Heading from "./components/heading";
import Footer from "./components/footer";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <div>
        <Heading />
      </div>
      <div className="page-container">
        <Homepage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
