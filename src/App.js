import React from "react";
import "./App.css";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      photo: ""
    };
  }
  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ZhbLuU3V2FtedrQw6gdtCg6hOOncb4OUe57JexYf"
    )
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }
  getPhoto = date => {
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=ZhbLuU3V2FtedrQw6gdtCg6hOOncb4OUe57JexYf`
    )
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h5>NASA | REACT </h5>
        </header>

        <div className='main'>
          <DateInput changeDate={this.changeDate} />
          <Photo photo={this.state.photo} />
          <h2>Picture of the Day</h2>
        </div>
      </div>
    );
  }
}

export default App;
