import React from 'react';
import ReactDOM from 'react-dom';
import  { Component } from 'react';


import {empdetails} from './Empdetails'


class Display extends Component{
componentDidMount(){

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
    export default Display;