import React from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css"
class App extends React.Component {
  state = {
    robots: robots,
    searchfield: "",
  };
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />

        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
