import React, { Component } from "react";

import Login from "../components/auth/login";

export default class Auth extends Component {
  render() {
    return (
      <div className="login-box-wrapper">
        <div className="form-wrapper">
          <Login />
        </div>
      </div>
    );
  }
}
