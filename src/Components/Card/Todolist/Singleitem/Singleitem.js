import React from "react";
import "./Singleitem.css";
import { NavLink } from "react-router-dom";
function Singleitem(props) {
  return (
    <div className="singleitem">
      <ul className="singleitemul">
        <li>
          <img src={props.imagepath} alt={props.name} />
        </li>
        <li>
          <NavLink to="/item/order" style={{ textDecoration: "none" }}>
            <span className="resitemsingle">{props.name} </span>
          </NavLink>
          <br />
          <br />

          <span>Type:{props.dishtype}</span>
          <br />
          <span>Price:{props.price}</span>
          <br />
          <span>Quantity:{props.quantity}</span>

          <br />
          <br />

          <NavLink to="/item/order" style={{ textDecoration: "none" }}>
            <span className="singleitemdown">Order Now</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Singleitem;
