import React from 'react';

const Person = (props) => {
return (
    <div>
        <p onClick={props.click}>Hi, I am {props.name} and have a {props.age} years old and </p>
        <p>{props.children}</p>
    </div>
)}

export default Person