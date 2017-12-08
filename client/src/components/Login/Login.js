import React from "react";
import Modal from "react-modal";
// import "./Login.css"

const style = {
    content : {
        position                   : 'absolute',
        top                        : '40px',
        left                       : '100px',
        right                      : '100px',
        bottom                     : '40px',
        border                     : '2px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px',
        opacity                    : "1"
    }
  };
const Login = (props) => (
    <Modal
        style={style}
        isOpen={props.handleLogin}
        onRequestClose={props.closeLogin}
        contentLabel="Login"
    >
        <div id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog">
            <div className="loginmodal-container">
                <h1>Login to Your Account</h1>
                <form>
                <input type="text" name="user" placeholder="Username" />
                <input type="password" name="pass" placeholder="Password" />
                <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
                </form>
                
                <div className="login-help">
                <a href="www.google.com">Register</a> - <a href="www.google.com">Forgot Password</a>
                </div>
            </div>
        </div>
        </div>
    </Modal>
)

export default Login;