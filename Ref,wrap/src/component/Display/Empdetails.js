import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

import Display from './Display';


const Empdetails = (props) => {
    return props.state.details.map((n, index) => {
        if (props.state.show)
            return (<Display {...n} click={props.Change.bind(this, index)} click1={props.age.bind(this, index)} />);
    })
}
export { Empdetails }