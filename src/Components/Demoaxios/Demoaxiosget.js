import React, { Component } from "react";
import Axios from "axios";

export default class Demoaxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then((Response) => {
        console.log(Response);
        this.setState({
          post: Response.data,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { post } = this.state;

    return (
      <div>
        {post.length
          ? post.map((item) => <div key={item.id}>{item.title}</div>)
          : null}
      </div>
    );
  }
}
