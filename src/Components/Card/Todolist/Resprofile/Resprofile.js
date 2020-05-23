import React from "react";
import Aux from "react-aux";
import "./Resprofile.css";
import { Addnewitemhr } from "../Horizontalbar/Horizontalbar";
import Additem from "../Additem/Additem";

class Resprofile extends React.Component {
  render() {
    return (
      <Aux>
        <span className="resprofilebackimg">Restaurant Name</span>
        <br />
        <b className="resprofiledescripheading">About Restaurant</b>
        <p className="resprofiledescrip">
          Your restaurant description gives potential customers a window into
          what it's like to dine at your restaurant. ... You can use the space
          to talk about anything, but we recommend starting with what the
          experience of eating at your restaurant is like, what influences the
          cuisine, or spotlighting any signature dishes.
        </p>
        <Addnewitemhr />
        <Additem />
      </Aux>
    );
  }
}
export default Resprofile;
