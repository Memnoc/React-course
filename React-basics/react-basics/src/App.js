import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Odin', age: 11028},
      { id:'2', name: 'Thor', age: 3242},
      { id:'3', name: 'Hela', age: 5328},
      { id:'4', name: 'Loki', age: 2328}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Odin', age: 15028},
      { name: event.target.value, age: 3242},
      { name: 'Hela', age: 5328}
    ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // Traditional syntax to copy an array (not just the pointer)
    //const persons = this.state.persons.slice();
    // ES6 syntax to copy an array (not just the pointer)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
      })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
      {this.state.persons.map((persons, index) => {
        return <Person
         click={() => this.deletePersonHandler(index)}
         key={person.id}  
         name={persons.name} 
         age={persons.age}/>
      })}
        </div> 
    );
  }

    return (
      <div className="App">
        <h1>Hello I am a React app</h1>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
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