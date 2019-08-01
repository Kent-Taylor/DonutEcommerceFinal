import React from "react";

import DonutLogo from "../images/donut.png";
import KreepyDonutsLogo from "../images/kreepyDonuts2.png";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={DonutLogo} alt="kreepy-donuts-logo" />
            <div className="hours-location">6 AM - Midnight</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
