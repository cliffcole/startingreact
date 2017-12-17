import React, { PureComponent } from 'react';
import classes from './App.css';
//import Person from './../components/Persons/Person/Person';
import Persons from './../components/Persons/Persons'
import Cockpit from './../components/Cockpit/Cockpit'
import Aux from './../hoc/Aux'
import withClass from './../hoc/withClass';

class App extends PureComponent {
    constructor(props) {
      super(props);
      console.log('[App.js] Inside constructor ', props);
    }

    componentWillMount() {
      console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
      console.log('[App.js] Inside componentDidMount()');
    }

    /* shouldComponentUpdate(nextProps, nextState){
      console.log('UPDATE App.js] Inside shouldComponentUpdate() ' + nextProps, nextState);
      //return nextProps.persons !== this.props.persons;
      return true;
  } */
  componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE App.js Inside componentWillUpdate() ' + nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js Inside componentDidUpdate() ');
  }
    state = {
      persons: [
        {id: 'asdfasf', name: 'cliff', age: 26},
        {id: 'adf2sd',name: 'fred', age: 30},
        {id: 'fasdf', name: 'steph', age: 33}
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked +1 
      }
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    console.log(personIndex);
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }
  render() {
    console.log('[App.js] inside render()');
    let persons = null;
    


    if(this.state.showPersons){
      console.log(this.state.persons);
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      </div>
      ); 

      
    }

    //let classes = ['red', 'bold'].join(' ');

    


    /* console.log(Component);
    console.log(this.props);
    console.log(this.context); */
    return (
      
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        
        {persons}

      </Aux>
      
    );
  }
}

export default withClass(App, classes.App);
