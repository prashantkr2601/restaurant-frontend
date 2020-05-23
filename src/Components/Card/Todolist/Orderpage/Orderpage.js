import React, { Component } from "react";
import "./Orderpage.css";
import Aux from "react-aux";

class Orderpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OTP: "",
    };
  }
  componentDidMount() {
    var ordernumber = Date.now();
    this.setState({ OTP: ordernumber });
  }

  render() {
    return (
      <Aux>
        <div className="orderpage">
          <b>
            <br />
            Your order number is:
            <b style={{ color: "green" }}>{this.state.OTP}</b>
            <br />
          </b>
          <b>
            <br />
            Your order details
            <br />
            <br />
          </b>
          <ul className="orderpageul">
            <li>
              <img
                src="/images/oderpageimg.gif"
                alt="orderpageimage"
                className="orderpageimage"
              />
            </li>
            <li>
              <span className="orderpageitemname">"abcd"</span>
              <br />
              <br />
              <span>
                <b>Type</b>
              </span>
              <br />
              <span>
                <b>Price</b>
              </span>
              <br />
              <span>
                <b>Quantity</b>
              </span>
            </li>
          </ul>

          <p>
            <b>Order Status:Your order is on the way</b>
          </p>
          <p>
            If you have any Query regarding this order feel free to contact us.
          </p>
          <p>its our pleasure to help you.</p>
        </div>
      </Aux>
    );
  }
}
export default Orderpage;
