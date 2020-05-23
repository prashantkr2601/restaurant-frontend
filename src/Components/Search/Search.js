import React, { Component } from "react";
import "./Search.css";
import Singleitem from "../Card/Todolist/Singleitem/Singleitem";
import SingleCard from "../Card/SingleCard/SingleCard";
import itemData from "../../Data/itemData";
import ResData from "../../Data/ResData";
import Aux from "react-aux";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      searchtrigger: false,
    };
    this.searchhandler = this.searchhandler.bind(this);
  }
  searchhandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
      searchtrigger: false,
    });
  }

  render() {
    const items = itemData.filter((data) => {
      if (this.state.search === "") return null;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.dishtype.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
      return null;
    });
    const withitemData = items.map((item) => (
      <Singleitem
        key={item.id}
        name={item.name}
        imagepath={item.imagepath}
        price={item.price}
        quantity={item.quantity}
        dishtype={item.dishtype}
      />
    ));
    const Resitems = ResData.filter((data) => {
      if (this.state.search === "") return null;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.dishmode.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
      return null;
    });
    const withResData = Resitems.map((item) => (
      <SingleCard
        key={item.id}
        name={item.name}
        image={item.imagepath}
        dishmode={item.dishmode}
        cost={item.cost}
        amount={item.amount}
        paymode={item.paymode}
        review={item.review}
      />
    ));
    return (
      <Aux>
        <div>
          <div className="searchmain">
            <span className="search">
              <input
                type="search"
                name="search"
                className="search"
                placeholder="Search Restautant,Disk and Location"
                onChange={this.searchhandler}
                value={this.state.name}
              />
              <b className="searchicon" onClick={this.searchhandler}>
                search
              </b>
            </span>
          </div>
        </div>
        <div>
          <ul>
            <li className="DispalyCard">{withitemData}</li>

            <li className="DispalyCard">{withResData}</li>
          </ul>
        </div>
      </Aux>
    );
  }
}

export default Search;
