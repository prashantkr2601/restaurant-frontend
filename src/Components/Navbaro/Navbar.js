import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div className="Navbarnavimage">
        <ul className="Navbarnavul">
          <li>
            <NavLink to="/" className="Navbarnavulli">
              {" "}
              Happy Meal
            </NavLink>
          </li>

          <NavLink to="/joinus" style={{ textDecoration: "none" }}>
            {" "}
            <li className="Navbarnavulli"> Join US</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default Homepage;
