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
        <h1>LOGIN TO ADMIN ACCOUNT</h1>

        <form onSubmit={this.handleSubmit} className="login-form-wrapper">
          <div className="form-group">
            <FontAwesomeIcon icon="envelope" />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon="lock" />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
