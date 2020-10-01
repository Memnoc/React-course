import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Odin', age: 11028},
      { name: 'Thor', age: 3242},
      { name: 'Hela', age: 5328}
    ]
  }


  render() {
    return (
      <div className="App">
        <h1>Hello I am a React app</h1>
        <button>Switch names</button>
        <Person name = {this.state.person[0].name} age={this.state.person[0].age} />
        <Person name = {this.state.person[1].name} age={this.state.person[1].age}> My hobbies: War and Parties </Person>
        <Person name = {this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
