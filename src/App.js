import React from 'react'
import logo from './logo.png'
// import logo from './logo2.png'
import './App.css'
import './App.scss'
import * as i2d from 'i2djs'
import {canvasLayer} from 'i2djs'





class App extends React.Component{
  
  componentDidMount () {

    const script = document.createElement("script");
    script.innerHTML=" setInterval( \
      function () {    \
        var randomColor = Math.floor(Math.random()*16777215).toString(16); \
        document.body.style.backgroundColor = \"#\"+randomColor;       \
      },1000); "
    script.async = true;
    script.setAttribute("type","text/javascript");
    
    document.body.appendChild(script);
  }
  render(){
    return (<div>
      <div class="sign">
      <span class="fast-flicker">Awesome~ </span> <span class="flicker">   </span>  <span class="flicker">DevOps~</span>People</div>
      <div className="App x">
       <header className="App-header ">
         <img src={logo} className="App-logo y" alt="logo" />
         
       </header></div>
       <div class="bottom_sign">
       <span class="fast-flicker">By~ </span> &nbsp;<span class="flicker">   </span>  <span class="flicker">Oleksii </span> &nbsp; <span class="flicker">& </span> &nbsp;<span class="flicker">Ashwini </span></div>
     
      </div>
    );
  }
  
}
export default App;


/***** 

Implemented using I2Djs framework

https://nswamy14.gitbook.io/i2djs/
https://github.com/I2Djs/I2Djs   

****/

