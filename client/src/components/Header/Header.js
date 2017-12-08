import React, {Component} from "react";
import "./Header.css";
import { Button } from 'react-bootstrap';
import Auth from "../../Auth/Auth.js";
import { Link } from "react-router-dom";


// import Login from "../Login";
// import Signup from "../Signup";
// import {Link} from "react-router-dom";

class Header extends Component {
  // state = {
  //   selectedLogin: false
  // }
  // handleLogin = ()=> {
  //   this.setState({
  //     selectedLogin:true
  //   })
  // }
  // closeLogin = ()=> {
  //   this.setState({
  //     selectedLogin:false
  //   })
  // }
  // handleSignup = ()=> {
  //   this.setState({
  //     selectedSignup:true
  //   })
  // }

  // closeSignup = ()=> {
  //   this.setState({
  //     selectedSignup:false
  //   })
  // }

  isLogin() {
    if(!localStorage.getItem("profile")) {
        return false;
    } else {
        console.log(localStorage.getItem("profile"))
        // this.setState({
        //   selectedLogin: true
        // })
        return true;
    }
  }

  constructor(props) {
        super(props)
        this.auth = new Auth();
    }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  render() {
    // const { isAuthenticated } = this.props.auth;
    return (
        <div className="jumbotron text-center">
            {/* <Login closeLogin={this.closeLogin} handleLogin={this.state.selectedLogin} /> */}
            {/* <Signup closeSignup={this.closeSignup} handleSignup={this.state.selectedSignup} handleSignupSubmit={this.handleSignupSubmit} /> */}
            <h1>SwapCard <i class="fa fa-credit-card-alt" aria-hidden="true"></i></h1>
            <h2>A place to trade your unused and unwanted gift cards for retailers you prefer</h2>
            {localStorage.getItem("profile") ? <p>Logged in as: {localStorage.getItem("profile")}</p> : ""}
            {
              !this.auth.isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    <i class="fa fa-sign-in" aria-hidden="true"></i>  Log In / <i class="fa fa-user-plus" aria-hidden="true"></i> Sign-up
                  </Button>
                )
            }
            {console.log(this.auth)}
            {
              this.auth.isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin btn-lg"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }

            {this.isLogin() ? <button
                    className="btn btn-warning" ><Link to="/user">Dashboard</Link></button> : <p></p>}

            {/* <button className="btn btn-success" onClick={this.handleLogin}>Log in</button> */}
            {/* <button className="btn btn-danger" onClick={this.handleSignup}>Sign up</button> */}
        </div>
    )
  }
}


export default Header;
