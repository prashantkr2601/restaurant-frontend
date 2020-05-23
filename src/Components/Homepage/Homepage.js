import React from "react";
import "./Homepage.css";
import Search from "../Search/Search";
import MultipleCard from "../Card/MultipleCard/MultipleCard";
import Multipleitem from "../Card/Todolist/Multipleitem/Multipleitem";
import { Popularres } from "../Card/Todolist/Horizontalbar/Horizontalbar";
import { Populardish } from "../Card/Todolist/Horizontalbar/Horizontalbar";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homePageImage">
        <div className="homePageSearch">
          <Search />
        </div>
        <Popularres />
        <MultipleCard />
        <Populardish />
        <Multipleitem />
      </div>
    );
  }
}

export default Homepage;
