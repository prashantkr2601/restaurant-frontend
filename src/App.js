import React, { Component } from "react";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Axios from "react-aux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resprofile from "./Components/Card/Todolist/Resprofile/Resprofile";
import Orderpage from "./Components/Card/Todolist/Orderpage/Orderpage";
import Resitem from "./Components/Card/Todolist/Resitem/Resitem";
import Multipleitem from "./Components/Card/Todolist/Multipleitem/Multipleitem";
import MultipleCard from "./Components/Card/MultipleCard/MultipleCard";
import Signup from "./Components/Card/Todolist/Signup/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Pagenotfound from "./Components/Pagenotfound/Pagenotfound";

class App extends Component {
  render() {
    return (
      <Axios>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/joinus" component={Signup} />
            <Route exact path="/res/resprofile" component={Resprofile} />
            <Route exact path="/res/resitem" component={Resitem} />
            <Route exact path="/item/order" component={Orderpage} />
            <Route exact path="/item" component={Multipleitem} />
            <Route exact path="/res" component={MultipleCard} />
            <Route exact path="" component={Pagenotfound} />
          </Switch>
        </Router>
      </Axios>
    );
  }
}

export default App;
