import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Odin', age: 11028},
      { name: 'Thor', age: 3242},
      { name: 'Hela', age: 5328}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({
      person: [
      { name: 'The Almighty Odin', age: 15028},
      { name: 'Thor', age: 3242},
      { name: 'Hela', age: 5328}
    ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hello I am a React app</h1>
        <button onClick={this.switchNameHandler}>Switch names</button>
        <Person name = {this.state.person[0].name} age={this.state.person[0].age} />
        <Person name = {this.state.person[1].name} age={this.state.person[1].age}> My hobbies: War and Parties </Person>
        <Person name = {this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;


/**
 * React Hooks based approach
 * Commit: new: React Hooks
 */

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     person: [
//       { name: 'Odin', age: 11028},
//       { name: 'Thor', age: 3242},
//       { name: 'Hela', age: 5328}
//     ],
//     otherState: 'some other value'
//   });

//   const [otherState, setOtherState] = useState({otherState: 'some other value'});

//   console.log(otherState, setOtherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       person: [
//       { name: 'The Almighty Odin', age: 15028},
//       { name: 'Thor', age: 3242},
//       { name: 'Hela', age: 5328}
//     ]
//     })
//   }

//     return (
//       <div className="App">
//         <h1>Hello I am a React app</h1>
//         <button onClick={switchNameHandler}>Switch names</button>
//         <Person name = {personsState.person[0].name} age={personsState.person[0].age} />
//         <Person name = {personsState.person[1].name} age={personsState.person[1].age}> My hobbies: War and Parties </Person>
//         <Person name = {personsState.person[2].name} age={personsState.person[2].age} />
//       </div>
//     );
//   }

// export default app;