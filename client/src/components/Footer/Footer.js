import React from "react" ;
import "./Footer.css";
import {Link} from "react-router-dom";


const Footer = (props) => (
    <div className="Foot">
       {/*Footer*/}
       <footer className="footer">
       <p className="footer-text">
       <br />
       </p>

      <div className="container-fluid second-footer-container">
       <p className="text-muted-two">
       Copyright &#169; SwapCard
       </p>
       </div>
       </footer>
    </div>
)

export default Footer;