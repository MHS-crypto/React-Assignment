import React from 'react';
import './App.css';

function App(props) {
  return (
    <div>
      Hello <strong>{props.Name}</strong> 
      <ul>
        <li> We have learned about basic React things</li>
        <li>Destructuring is an important concept</li>
        <li>We have also learned about different types of functions</li>
      </ul>
      My age is {props.Age} <br/>
      After 5 years my age will be {props.Age + 5}
    </div>
    
  );
}

export default App;
