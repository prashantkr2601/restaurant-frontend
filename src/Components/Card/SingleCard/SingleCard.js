import React from "react";
import "./SingleCard.css";
import { NavLink } from "react-router-dom";
function SingleCard(props) {
  return (
    <div className="SCardMD">
      <ul className="SCardMDul">
        <li>
          <img className="scardimage" src={props.image} alt={props.name} />
        </li>

        <li>
          <NavLink
            to="/res/resitem"
            style={{ textDecoration: "none", marginLeft: "30px" }}
          >
            <span className="resnamesinglecard">{props.name}</span>
          </NavLink>
          <br />
          <span>
            <b>{props.dishmode}</b>
          </span>
          <br />
          <span>
            <b>Cost:</b>
            {props.cost} per person{" "}
          </span>
          <br />
          <span>
            <b>Min:</b>
            {props.amount}
          </span>
          <br />
          <span>
            <b>Accept:</b>
            {props.paymode} payment
          </span>

          <br />
          <br />
          <NavLink to="/res/resitem" style={{ textDecoration: "none" }}>
            <span className="SCardMDOB">View Menu</span>
          </NavLink>
        </li>
        <li>{props.review}</li>
        <br />
      </ul>
    </div>
  );
}
export default SingleCard;
