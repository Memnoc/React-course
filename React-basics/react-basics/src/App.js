import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello I am a React app</h1>
        <Person name = "Odin" age="11028" />
        <Person name = "Thor" age="3234"> My hobbies: War and Parties </Person>
        <Person name = "Hela" age="5328" />
      </div>
    );
  }
}

export default App;
