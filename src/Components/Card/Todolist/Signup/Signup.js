import React, { Component } from "react";
import "./Signup.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      resorcus: "",
      rcname: "",
      email: "",
      pass: "",
      cpass: "",
      dishtype: "",
      image: "",
      location: "",
      description: "",
      resrev: "",
      rescost: "",
      resmin: "",
      paymode: "",
      UploadProgress: "",
      resorcuslogin: "",
      loginshow: false,
      redirectresprofile: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginhandler = this.loginhandler.bind(this);
    this.signuphandler = this.signuphandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderRedirect = () => {
    if (this.state.redirectresprofile) {
      return <Redirect to="/res/resprofile" />;
    }
  };
  handleChange(event) {
    event.preventDefault();
    const { name, value, maxLength } = event.target;
    const rescost = value.slice(0, maxLength);
    const resmin = value.slice(0, maxLength);
    const resrev = value.slice(0, maxLength);
    if (name === "image") {
      this.setState({
        image: event.target.files[0],
      });
    } else if (name === "rescost") {
      this.setState({
        rescost,
      });
    } else if (name === "resmin") {
      this.setState({
        resmin,
      });
    } else if (name === "resrev") {
      this.setState({
        resrev,
      });
    } else
      this.setState({
        [name]: value,
      });
  }
  loginhandler() {
    this.setState({
      loginshow: true,
      resorcus: "",
      rcname: "",
      email: "",
      pass: "",
      cpass: "",
      dishtype: "",
      image: "",
      location: "",
      description: "",
      resrev: "",
      rescost: "",
      resmin: "",
      paymode: "",
      UploadProgress: "",
      resorcuslogin: "",
    });
  }
  signuphandler() {
    this.setState({
      loginshow: false,
      resorcus: "",
      rcname: "",
      email: "",
      pass: "",
      cpass: "",
      dishtype: "",
      image: "",
      location: "",
      description: "",
      resrev: "",
      rescost: "",
      resmin: "",
      paymode: "",
      UploadProgress: "",
      resorcuslogin: "",
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      resorcus,
      rcname,
      email,
      pass,
      cpass,
      dishtype,
      image,
      location,
      description,
      resrev,
      rescost,
      resmin,
      paymode,
      resorcuslogin,
    } = this.state;
    if (resorcus !== "" && resorcus === "Restaurant") {
      if (
        rcname !== "" &&
        email !== "" &&
        pass !== "" &&
        cpass !== "" &&
        dishtype !== "" &&
        location !== "" &&
        description !== "" &&
        resrev !== "" &&
        rescost !== "" &&
        resmin !== "" &&
        paymode !== ""
      ) {
        if (image) {
          var fd = new FormData();
          fd.append("image", image, image.name);
        }
        Axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          {
            resorcus,
            rcname,
            email,
            pass,
            cpass,
            dishtype,
            image,
            location,
            description,
            resrev,
            rescost,
            resmin,
            paymode,
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
    } else if (resorcus !== "" && resorcus === "Customer") {
      if (
        rcname !== "" &&
        email !== "" &&
        pass !== "" &&
        cpass !== "" &&
        dishtype !== ""
      ) {
        if (image) {
          fd = new FormData();
          fd.append("image", image, image.name);
        }

        Axios.post(
          "http://localhost/internshalaprojectDB/connection.php/",
          {
            resorcus,
            rcname,
            email,
            pass,
            cpass,
            dishtype,
            fd,
            image,
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
      } else alert("All fields are required  ");
    }

    if (this.state.loginshow) {
      console.log(this.state.email, this.state.pass, this.state.resorcus);
      if (email !== "" && pass !== "" && resorcuslogin !== "") {
        Axios.post("https://jsonplaceholder.typicode.com/posts", {
          email,
          pass,
          resorcuslogin,
        })
          .then((Response) => {
            console.log(Response);

            this.setState({ Success: "Success Retriving Data" });
            console.log(this.state.Success);

            if (Response.data.resorcuslogin === "Restaurant") {
              this.setState({ redirectresprofile: true });
            }
          })
          .catch((Error) => {
            alert("Error Retriving Data");
          });
      } else alert("All  log in fields are required ");
    }
  }
  render() {
    const resorcusdata = !this.state.loginshow ? (
      <li>
        <span>Create a New Account</span>
        <br />
        <span style={{ color: "red" }}>{this.state.passcpassmatch}</span>
        <br />
        <select
          className="resformulinput"
          value={this.state.name}
          name="resorcus"
          onChange={this.handleChange}
        >
          <option value="">--Register as a--</option>
          <option value="Customer">Customer</option>
          <option value="Restaurant">Restaurant</option>
        </select>
        <b className="resformulinputreq">*</b>
      </li>
    ) : (
      <li>
        <select
          className="resformulinput"
          value={this.state.name}
          name="resorcuslogin"
          onChange={this.handleChange}
        >
          <option value="">--Login as a--</option>
          <option value="Customer">Customer</option>
          <option value="Restaurant">Restaurant</option>
        </select>
        <b className="resformulinputreq">*</b>
      </li>
    );

    const signupformdata =
      this.state.resorcus === "Customer" && !this.state.loginshow ? (
        <span>
          <li>
            <input
              type="text"
              className="resformulinput"
              name="rcname"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Your Name"
            />
            <b className="resformulinputreq">*</b>
          </li>
          <li>
            <input
              type="email"
              className="resformulinput"
              name="email"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Email id"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              type="password"
              className="resformulinput"
              name="pass"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Password"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              type="password"
              className="resformulinput"
              name="cpass"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Confirm Password"
            />
            <b className="resformulinputreq">*</b>
          </li>
          <li>
            <select
              className="resformulinput"
              value={this.state.name}
              name="dishtype"
              onChange={this.handleChange}
            >
              <option value="">Please Choose Dish Type</option>
              <option value="Veg">Veg</option>
              <option value="Nonveg">Nonveg</option>
              <option value="Veg and Nonveg">Veg and Nonveg</option>
            </select>
            <b className="resformulinputreq">*</b>
          </li>
          <li>
            <input
              style={{ display: "none" }}
              type="file"
              className="resformulresimage"
              name="image"
              value={this.state.name}
              onChange={this.handleChange}
              ref={(fileinput) => (this.fileinput = fileinput)}
            />
            <p className="itemimage" onClick={() => this.fileinput.click()}>
              {this.state.image.name ? this.state.image.name : "Select Image"}
            </p>
            <b>
              Upload Progress:
              {this.state.UploadProgress
                ? this.state.UploadProgress + "%"
                : "0%"}
            </b>
          </li>
        </span>
      ) : this.state.resorcus === "Restaurant" && !this.state.loginshow ? (
        <span>
          <li>
            <input
              type="text"
              className="resformulinput"
              name="rcname"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Restaurant Name"
            />
            <b className="resformulinputreq">*</b>
          </li>
          <li>
            <input
              type="email"
              className="resformulinput"
              name="email"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Email id"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              type="password"
              className="resformulinput"
              name="pass"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Password"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              type="password"
              className="resformulinput"
              name="cpass"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Confirm Password"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              className="resformulinput"
              type="text"
              name="location"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Restaurant Location"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              className="resformulinputtextarea"
              type="textarea"
              name="description"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Something About Restaurant"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              className="resformulinput"
              type="number"
              name="rescost"
              value={this.state.rescost}
              onChange={this.handleChange}
              maxLength="5"
              placeholder="Enter Per Person Cost"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              className="resformulinput"
              type="number"
              name="resmin"
              value={this.state.resmin}
              maxLength="5"
              onChange={this.handleChange}
              placeholder="Minimum Free Delivery Amount"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              type="number"
              step="0.01"
              className="resformulinput"
              name="resrev"
              maxLength="3"
              value={this.state.resrev}
              onChange={this.handleChange}
              placeholder="Enter Review out of 5 scale"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <select
              className="resformulinput"
              value={this.state.name}
              name="paymode"
              onChange={this.handleChange}
            >
              <option value="">Choose Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
              <option value="Cash and Online">Cash and Online</option>
            </select>
            <b className="resformulinputreq">*</b>
          </li>
          <li>
            <select
              className="resformulinput"
              value={this.state.name}
              name="dishtype"
              onChange={this.handleChange}
            >
              <option value="">Please Choose Dish Type</option>
              <option value="Veg">Veg</option>
              <option value="Nonveg">Nonveg</option>
              <option value="Veg and Nonveg">Veg and Nonveg</option>
            </select>
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              style={{ display: "none" }}
              type="file"
              className="resformulresimage"
              name="image"
              value={this.state.name}
              onChange={this.handleChange}
              ref={(fileinput) => (this.fileinput = fileinput)}
            />
            <p className="itemimage" onClick={() => this.fileinput.click()}>
              {this.state.image.name ? this.state.image.name : "Select Image"}
            </p>
            <b>
              Upload Progress:
              {this.state.UploadProgress
                ? this.state.UploadProgress + "%"
                : "0%"}
            </b>
          </li>
        </span>
      ) : this.state.loginshow ? (
        <span>
          <li>
            <input
              type="email"
              className="resformulinput"
              name="email"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Email id"
            />
            <b className="resformulinputreq">*</b>
          </li>

          <li>
            <input
              type="password"
              className="resformulinput"
              name="pass"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter Password"
            />
            <b className="resformulinputreq">*</b>
          </li>
        </span>
      ) : (
        <img
          src="/images/signupnotfound.jpg"
          className="signupnotfound"
          alt="signuppagenotfound"
        />
      );

    const signuploginbuttonshow = !this.state.loginshow ? (
      <span>
        Already Account
        <b>
          <span className="signuploginbtn" onClick={this.loginhandler}>
            {" "}
            Login{" "}
          </span>
        </b>{" "}
        <br />
        <br />
        <br />
      </span>
    ) : (
      <span>
        New Here
        <b>
          <span className="signuploginbtn" onClick={this.signuphandler}>
            {" "}
            Signup{" "}
          </span>
        </b>{" "}
        <br />
        <br />
        <br />
      </span>
    );
    const submitbtnshow = this.state.resorcus;
    const submitbtnshowloginshowtrue = this.state.loginshow;

    return (
      <main className="resformmain">
        {this.state.redirectresprofile ? (
          <div style={{ display: "none" }}>
            {" "}
            <form className="resform" onSubmit={this.handleSubmit}>
              <ul className="resformul">
                <li>
                  <h4>Join for Happy Meal</h4>
                </li>

                {resorcusdata}

                {signupformdata}
                {submitbtnshow || submitbtnshowloginshowtrue ? (
                  <button type="submit" className="resformulbutton">
                    Submit
                  </button>
                ) : null}
              </ul>
              <span>{signuploginbuttonshow}</span>
            </form>
          </div>
        ) : (
          <form className="resform" onSubmit={this.handleSubmit}>
            <ul className="resformul">
              <li>
                <h4>Join for Happy Meal</h4>
              </li>

              {resorcusdata}

              {signupformdata}
              {submitbtnshow || submitbtnshowloginshowtrue ? (
                <button type="submit" className="resformulbutton">
                  Submit
                </button>
              ) : null}
            </ul>
            <span>{signuploginbuttonshow}</span>
          </form>
        )}
        <div>{this.renderRedirect()}</div>
      </main>
    );
  }
}

export default Signup;
