import React from "react";

import KreepyDonutsLogo from "../images/kreepyDonuts2.png";

class Heading extends React.Component {
  render() {
    return (
      <div>
        <div className="donut-logo">
          <div className="header">
            <img src={KreepyDonutsLogo} alt="kreepy-donuts-logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
