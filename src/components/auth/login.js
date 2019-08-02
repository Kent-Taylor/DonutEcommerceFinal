import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import "./auth.css";

library.add(faEnvelope, faLock);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("Handle submit", this.state.email, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="auth-form-wrapper">
        <div className="elements-in-form-wrapper">
          <h1>Admin Account Login</h1>

          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="form-group-wrapper">
              <div className="form-group">
                <div className="font-awesome-icon">
                  <FontAwesomeIcon icon="envelope" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <div className="font-awesome-icon">
                  <FontAwesomeIcon icon="lock" />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="login-button">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
