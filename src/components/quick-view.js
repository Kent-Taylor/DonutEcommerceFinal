import React from "react";

export default class QuickView extends React.Component {
  constructor() {
    super();
  }
  //this.stuff = this.stuff.bind(this);
  render() {
    return (
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul className="menu">
            <button className="letter-button">Donut 1</button>
            <button className="letter-button">Donut 2</button>
            <button className="letter-button">Donut 3</button>
            <button className="letter-button">Donut 4</button>
            <button className="letter-button">Donut 5</button>
            <button className="letter-button">Donut 6</button>
            <button className="letter-button">Donut 7</button>
            <button className="letter-button">Donut 8</button>
            <button className="letter-button">Donut 9</button>
            <button className="letter-button">Donut 10</button>
          </ul>
        </div>
      </nav>
    );
  }
}
