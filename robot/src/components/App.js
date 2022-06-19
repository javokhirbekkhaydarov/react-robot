import React from "react";
import { robots } from "../components/index";
import CardList from "../components/CardList";
import SearchBox from "./SearchBox";
import "../components/App.css";
class App extends React.Component {
  state = {
    robots: [],
    searchfield: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

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
     if(this.state.robots.length === 0){
      return <h2>404 note found</h2>
     }
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
