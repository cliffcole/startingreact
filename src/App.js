import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'cliff', age: 36},
      {name: 'fred', age: 30},
      {name: 'steph', age: 33}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log("was clicked!");
    // DOnt do this this.state.persons[0].name = "clifford";
    this.setState({persons: [
      {name: newName, age: 36},
      {name: 'fred', age: 30},
      {name: 'steph', age: 35}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'cliff', age: 36},
      {name: event.target.value, age: 30},
      {name: 'steph', age: 35}
    ]})
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p> this reall works</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('cliffticker!')}>switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'clifford!')}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My hobbies: Racing</Person>

      </div>
    );
  }
}

export default App;
