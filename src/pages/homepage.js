import React from "react";
import QuickView from "../components/quick-view";

import DonutCards from "../components/donut-cards";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="todays-suggestions">
        <h1>Today's Suggestions</h1>
        <div className="suggestions">
          <DonutCards />
          <DonutCards />
          <DonutCards />
          <DonutCards />
          <DonutCards />
          <DonutCards />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
