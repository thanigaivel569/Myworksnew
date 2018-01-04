import React from 'react';
import ReactDOM from 'react-dom';
import  { Component } from 'react';
import PropTypes from 'prop-types';

import {empdetails} from './Empdetails'


class Display extends Component{

componentDidMount(){
    
if(this.props.position===0)
    this.inputElement.focus()
}
render(){

    return(
    <div> 
        <h1> Displaying NAME: {this.props.name} and AGE: {this.props.age} </h1>
        <input type="text" value={this.props.name} onChange={this.props.click} ref={ (high)=>{this.inputElement=(high)}} ></input>
        <br/>
        <br/>
        <input type="text"  value={this.props.age}  onChange={this.props.click1} ></input>
         
    </div>
    
    )};

}

Display.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
   
  };
  
  Display.defaultProps = {
    name: 'Enter the name',
    age: 'Enter the age',
  
  };
    export default Display;