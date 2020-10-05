import React, { Component } from 'react';
import "./Person.css";

// Functional component
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" defaultValue={props.name} onChange={props.changed}/>
        </div>
    ) 
};

export default person;