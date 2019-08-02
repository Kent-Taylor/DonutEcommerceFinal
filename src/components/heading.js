import React from "react";

import KreepyDonutsLogo from "../images/kreepyDonuts2.png";

class Heading extends React.Component {
  render() {
    return (
      <div>
        <div className="donut-logo">
          <div className="hours-top">6 AM - Midnight</div>

          <div className="header">
            <img src={KreepyDonutsLogo} alt="kreepy-donuts-logo" />
          </div>
          <div className="phone-top">1-(800)-mydonut</div>
        </div>
      </div>
    );
  }
}

export default Heading;
