import { useState } from 'react'
import React, { Component } from "react"
import './App.css'
import Todo from "./components/Todo"
import Counter from "./components/Counter"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       < Header> </Header>
//       <h1>Hello, world</h1>
//     </>
//   )
// }


class App extends Component {
  state = {
    myString: "Hello It me Vishnu",
    myStringOne: "Debug Gone",
  };
  handleChange=()=>{
    this.setState({
      myStringOne:"Media"
    });
  }  
  render() {
    return (
      <div>
{/* 
        <h1>{this.state.myStringOne}</h1>
        <h1>{this.state.myString}</h1>
        <button onClick={this.handleChange}>Change Text</button>
        <Todo sendingData={this.state.myStringOne} /> */}
        <Counter></Counter>
      </div>

    )
  }
}

export default App
