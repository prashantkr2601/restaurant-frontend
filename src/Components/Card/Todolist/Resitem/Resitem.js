import React from "react";
import Aux from "react-aux";
import "./Resitem.css";
import Singleitem from "../Singleitem/Singleitem";
import { Showalliteminresprofhr } from "../Horizontalbar/Horizontalbar";
import ResData from "../../../../Data/itemData";

class Resitem extends React.Component {
  render() {
    const withData = ResData.map((item) => (
      <Singleitem
        key={item.id}
        name={item.name}
        imagepath={item.imagepath}
        price={item.price}
        quantity={item.quantity}
        dishtype={item.dishtype}
      />
    ));
    return (
      <Aux>
        <span className="resitembackimg">Restaurant Name</span>
        <br />
        <b className="resitemdescripheading">About Restaurant</b>
        <p className="resitemdescrip">
          Your restaurant description gives potential customers a window into
          what it's like to dine at your restaurant. ... You can use the space
          to talk about anything, but we recommend starting with what the
          experience of eating at your restaurant is like, what influences the
          cuisine, or spotlighting any signature dishes.
        </p>

        <div>
          <Showalliteminresprofhr />
          <ul>
            <li className="Dispalyalliteminresprofile">{withData}</li>
          </ul>
        </div>
      </Aux>
    );
  }
}
export default Resitem;
