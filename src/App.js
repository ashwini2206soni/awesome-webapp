import React from 'react'
import logo from './logo.png'
import './App.css'




class App extends React.Component{
  componentDidMount () {
    const script = document.createElement("script");
    script.innerHTML=" setInterval( \
      function () {    \
        var randomColor = Math.floor(Math.random()*16777215).toString(16); \
        document.body.style.backgroundColor = \"#\"+randomColor;       \
      },1000);"
    script.async = true;
    document.body.appendChild(script);
  }
  render(){
    return (<div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
      </header>
     </div>);
  }
}
export default App;
