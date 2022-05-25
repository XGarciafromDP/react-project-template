import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Map from "./Components/Map";

const menu = document.querySelector("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/5ucz-vwe8.json?$$app_token=yS0vUdeTk57XnkVJDjMTMWQgd"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data
        });
        console.log(this.state.data);
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Searchbar />
        <Map />
        <h1></h1>
      </div>
    );
  }
}

export default App;
