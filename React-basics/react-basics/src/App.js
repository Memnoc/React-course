import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternatively you could use:
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
      {this.state.persons.map((persons, index) => {
        return <Person
         click={() => this.deletePersonHandler(index)}
         key={persons.id}  
         name={persons.name} 
         age={persons.age}
         changed={(event) => this.nameChangedHandler(event, persons.id)}/>
      })}
        </div> 
    );

    style.backgroundColor = 'red';
    style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
  }

  const classes = [];
  if(this.state.persons.length <= 2) {
    classes.push('red'); // classes = ['red'];
  }
  if(this.state.persons.length <=1) {
    classes.push('bold'); // classes = ['red', 'bold'];
  }

    return (
      <div className="App">
        <h1>Hello I am a React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
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