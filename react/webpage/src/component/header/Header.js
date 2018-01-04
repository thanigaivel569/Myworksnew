import React from 'react';
import ReactDOM from 'react-dom';
import  { Component } from 'react';
import '../../container/App.css';
import PropTypes from 'prop-types'


const Head=(props)=>{
    return(

    <h1 className="head">{props.children}</h1>);
};


Head.propTypes=
{

    children:PropTypes.string
}


export {Head};