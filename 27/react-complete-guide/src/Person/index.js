import React from 'react';

const Person = ({name}) => {
return <p>Hi, I am a {name} and have a {Math.floor(Math.random()*30)} yars old</p>
}

export default Person