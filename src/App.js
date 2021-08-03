import React from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import "./main.css"

class App extends React.Component {
  state = {
    fetchedData: {},
    fetching: false,
    inputValue: ""
  }

  componentDidMount() {
    fetch("https://geo.ipify.org/api/v1?apiKey=at_IP9TtrAqUNIXyAExdZNL869tCxTso")
    .then(res => res.json())
    .then(data => this.setState({fetchedData: Object.assign({}, data)}))
    .catch(err => console.log(err))
  }

  fetchData = ip => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_IP9TtrAqUNIXyAExdZNL869tCxTso&ipAddress=${ip}`)
    .then(res => res.json())
    .then(data => this.setState({fetchedData: Object.assign({}, data)}))
    .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({inputValue: e.target.value})
  }

  onSubmit = () => {
    this.fetchData(this.state.inputValue)
  }

  render() {
    return (
      <div className="App">
        <Header handleChange={this.handleChange} onSubmit={this.onSubmit}/>
        <MapView data={this.state.fetchedData} inputValue={this.state.inputValue}/>
      </div>
    );
  }
}

export default App;
