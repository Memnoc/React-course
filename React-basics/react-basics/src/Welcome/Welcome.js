import React, { Component } from 'react';

// Functional component
const welcome = (props) => {
    return (
        <div>
            <p>{props.greeting} {props.name} {props.test}</p>
        </div>
    )
}

export default welcome;