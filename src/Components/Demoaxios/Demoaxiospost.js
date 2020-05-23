import React from "react";
import Axios from "axios";
class Demoaxiospost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
    };
    this.Submithandler = this.Submithandler.bind(this);
    this.onchangehandler = this.onchangehandler.bind(this);
  }

  onchangehandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  Submithandler(event) {
    event.preventDefault();
    console.log(this.state);
    Axios.post("https://jsonplaceholder.typicode.com/posts/", this.state)
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.Submithandler}>
          <input
            type="text"
            name="firstname"
            onChange={this.onchangehandler}
            value={this.state.name}
          />
          <input
            type="text"
            name="lastname"
            value={this.state.name}
            onChange={this.onchangehandler}
          />
          <input
            type="number"
            name="age"
            value={this.state.name}
            onChange={this.onchangehandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Demoaxiospost;
