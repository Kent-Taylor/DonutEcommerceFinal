import React from "react";
import QuickView from "../components/quick-view";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="donut-background">
        <QuickView />
        <img
          src="https://images-gmi-pmc.edge-generalmills.com/9c8e5dc4-2883-4fff-97b2-ed778822c2e5.jpg"
          alt="donut-pic"
        />
      </div>
      <div className="todays-suggestions">
        <h1>Today's Suggestions</h1>
        <div className="suggestions">Suggestions go here</div>
      </div>
    </div>
  );
};

export default Homepage;
