import React, { Component } from "react";
import "./Additem.css";
import Singleitem from "../Singleitem/Singleitem";
import { Showalliteminresprofhr } from "../Horizontalbar/Horizontalbar";
import ResData from "../../../../Data/itemData";
import Axios from "axios";

class Additem extends Component {
  constructor() {
    super();
    this.state = {
      additem: false,
      dishname: "",
      price: "",
      quantity: "",
      dishtype: "",
      UploadProgress: "",
      dishimage: "",
    };
    this.additemform = this.additemform.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  additemform() {
    this.setState({
      additem: !this.state.additem,
    });
  }

  handleChange(event) {
    const { name, value, maxLength } = event.target;
    const price = value.slice(0, maxLength);
    if (name === "dishimage") {
      this.setState({
        dishimage: event.target.files[0],
      });
    } else if (name === "price") {
      this.setState({
        price,
      });
    } else
      this.setState({
        [name]: value,
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { dishname, price, quantity, dishtype, dishimage } = this.state;
    const resorcusoraddnewitem = "Addnewitem";
    if (
      dishname !== "" &&
      price !== "" &&
      quantity !== "" &&
      dishtype !== "" &&
      dishimage !== ""
    ) {
      const fd = new FormData();
      fd.append("Dishimage", dishimage, dishimage.name);
      console.log(fd);
      Axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          resorcusoraddnewitem,
          dishname,
          price,
          quantity,
          dishtype,
          dishimage,
          fd,
        },

        {
          onUploadProgress: (ProgressEvent) => {
            var percentCompleted = Math.round(
              (ProgressEvent.loaded * 100) / ProgressEvent.total
            );
            this.setState({ UploadProgress: percentCompleted });
          },
        }
      )

        .then((Response) => {
          console.log(Response);
          this.setState({ Success: "Success Retriving Data" });
        })
        .catch((Error) => {
          alert("Error Retriving Data");
        });
      console.log(this.state);
    } else alert("All fields are required ");
  }
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
    const additemformdata = this.state.additem ? (
      <form className="addnewitemform" onSubmit={this.handleSubmit}>
        <ul className="addnewitemformul">
          <li>
            <h4>Add New Item</h4>
          </li>
          <li>
            <input
              type="text"
              className="addnewitemformulinput"
              name="dishname"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Dish Name"
            />
            <b className="addnewitemformulinputreq">*</b>
          </li>

          <li>
            <input
              type="number"
              maxLength="5"
              className="addnewitemformulinput"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              placeholder="Enter Dish Price"
            />
            <b className="addnewitemformulinputreq">*</b>
          </li>

          <li>
            <input
              type="text"
              className="addnewitemformulinput"
              name="quantity"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Dish Quantity"
            />
            <b className="addnewitemformulinputreq">*</b>
          </li>
          <li>
            <select
              className="addnewitemformulinput"
              value={this.state.name}
              name="dishtype"
              onChange={this.handleChange}
            >
              <option value="">Please Choose Dish Type</option>
              <option value="Veg">Veg</option>
              <option value="Nonveg">Nonveg</option>
            </select>
            <b className="addnewitemformulinputreq">*</b>
          </li>
          <li>
            <input
              style={{ display: "none" }}
              type="file"
              name="dishimage"
              value={this.state.name}
              onChange={this.handleChange}
              ref={(fileinput) => (this.fileinput = fileinput)}
            />
            <p className="itemimage" onClick={() => this.fileinput.click()}>
              {this.state.dishimage.name
                ? this.state.dishimage.name
                : "Select Image"}
            </p>
            <b>
              Upload Progress:
              {this.state.UploadProgress
                ? this.state.UploadProgress + "%"
                : "0%"}
            </b>
          </li>
          <span>
            <button type="submit" className="addnewitemformulbutton">
              Submit
            </button>
          </span>
        </ul>
      </form>
    ) : null;

    return (
      <div>
        <div className="Additemmain">
          <span className="Additemdiv" onClick={this.additemform}>
            <i className="addcircle">+</i>
          </span>
        </div>

        <div className="addnewitemformmain">{additemformdata}</div>
        <div>
          <Showalliteminresprofhr />
          <ul>
            <li className="Dispalyalliteminresprofile">{withData}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Additem;
