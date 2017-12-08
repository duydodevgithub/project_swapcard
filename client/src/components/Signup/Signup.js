import React from "react";
import Modal from "react-modal";

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

const Signup = () => (
    <Modal
        style={style}
        isOpen={false}
        contentLabel="Login"
    >
        <div>
            <legend>New to SwapCard? Sign up!</legend>
            <form accept-charset="UTF-8" action="" method="post">
                <input  name="name" placeholder="Full Name" type="text" />
                <input  name="username" placeholder="Username" type="text" />
                <input  name="password" placeholder="Password" type="password" /> 
                <button className="btn btn-primary" type="submit">Sign up for WebApp</button>
            </form>
        </div>
    </Modal>
)

export default Signup;