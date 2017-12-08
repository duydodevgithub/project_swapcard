import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" {...props}>
    <div className="img-container">
      <img alt={props.store} src={props.fimage} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Store:</strong> {props.store}
        </li>
        <li>
          <strong>Price:</strong> {props.price}
        </li>
        <li>
          <strong>ExpDate:</strong> {props.exp}
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
