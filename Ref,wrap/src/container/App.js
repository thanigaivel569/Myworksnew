import React from 'react';
import ReactDOM from 'react-dom';
import  { Component } from 'react';
import {Wrap} from './Wrap';

import {Empdetails} from '../component/Display/Empdetails';
import {Head} from '../component/header/Header.js';



class First extends Component{

  state={

    details:[
      
      { name:"tizen" ,age:20},{name:"nirmal" ,age:21}, {name:"superman" ,age:25}
    ],show:true,order:"asc"
    
  };

   change=()=>
     this.setState({
      details:[
      
        { name:"thanigaivel" ,age:20},{name:"nirmal-pandi" ,age:21}, {name:"superman" ,age:25}
      ]
  
     });

     onchange=(a,event)=>{
       

  const {details} = this.state;
  details[a].name=event.target.value; 
  this.setState({details});
  }

  onAge=(b,event)=>{
       

    const {details} = this.state;
    details[b].age=event.target.value; 
    this.setState({details});
    }

onshow=()=>{
 let q= this.state.show;
 this.setState({show:!q});

}
     
Name=()=>{

    const { details,order}=this.state;
    const value = (order === 'asc')?[1,-1,'desc']:[-1,1,'asc'];
    details.sort((x, y) => {
    return y.name> x.name? value[0] : y.name< x.name? value[1] : 0;
    });
    this.setState({   details, order: value[2] });
    }
    
    Age = () => {
    const {  details,order}=this.state;
    const value = (order === 'asc')?[1,-1,'desc']:[-1,1,'asc'];
    details.sort((x, y) => {
    return y.age> x.age? value[0] : y.age< x.age? value[1] : 0;
    });
    this.setState({   details, order: value[2] });
    }
  
    





  render(){
    
    return( <div>
              <Head>This Is Header</Head>
             <Wrap>
              <button className="Button-size" onClick={this.change}> setState </button>
            
              <button className="Button-size"  onClick={this.onshow}>Show/Hide</button>
                <button className="Button-size"  onClick={this.Name}>Sort Name</button>
                <button className="Button-size" onClick={this.Age}>Sort Age</button>
              <Empdetails state={this.state} Change={this.onchange} age={this.onAge}/>

          </Wrap>

      </div>)
  }
}

export default First;


 
