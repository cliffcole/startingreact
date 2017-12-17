import React from 'react';

import classes from './Cockpit.css';
import Aux from './../../hoc/Aux';
const cockpit = (props) => {

    let assignedClasses = [];
    let btnClasses = classes.Button;
    if(props.showPersons) {
        btnClasses = [classes.Button,classes.Red].join(' ');
    }
    
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
        <h1>{ props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}> this really works</p>
        <button 
          className={btnClasses}
          onClick={props.clicked}>show name</button>
        </Aux>
    );
}

export default cockpit;