import React, { Component } from 'react';
import Auth from "../Auth/Auth.js";

class Home extends Component {
  login() {
    this.auth.login();
  }
  render() {
    // const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          this.auth.isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !this.auth.isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
