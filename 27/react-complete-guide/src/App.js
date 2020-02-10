import React, { Component, useState } from 'react';

import './App.css';
import Person from './Person'

const App = props => {

  const [persons, setPersons] = useState([
    {name: 'Carlos', age: 35},
    {name: 'Johann', age: 3},
    {name: 'Lucas', age: 12}
  ])
 

const switchNameHandler = (newName )=>{
  setPersons([
    {name: newName , age: 35},
    {name: 'Johann Gottlob', age: 3},
    {name: 'Lucas Augusto', age: 12}
  ])
  
}

    return (
      <div className="App">
        <h1>Hi , I am a React app</h1>
        <button onClick={()=> {switchNameHandler('Carla')}}>Switch Name</button>
        {persons.map((person,index)=>{
          return <Person key ={index}name={person.name} age={person.age} click={switchNameHandler.bind(this, 'Johann Gotlob  ')}/>
        })}
      </div>
    );
  
}

export default App;
