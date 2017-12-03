import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    constructor() {
      super();

      this.state = {
        persons: [
          {id: 'asdfasf', name: 'cliff', age: 26},
          {id: 'adf2sd',name: 'fred', age: 30},
          {id: 'fasdf', name: 'steph', age: 33}
        ],
        otherState: 'some other value',
        showPersons: false
      }
    }
  

  switchNameHandler = (newName) => {
    //console.log("was clicked!");
    // DOnt do this this.state.persons[0].name = "clifford";
    this.setState({persons: [
      {name: newName, age: 26},
      {name: 'fred', age: 30},
      {name: 'steph', age: 35}
    ]})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})
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

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return( 
                <Person 
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  
                />
              )
            })
          }

      </div>
      );
    }
    console.log(Component);
    console.log(this.props);
    console.log(this.context);
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p> this reall works</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>switch name</button>
        
          {persons}

      </div>
    );
  }
}

export default App;
