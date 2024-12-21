
import React, { Component } from "react"


class Counter extends Component{
    state = {
        counter:0
    }
    countIncriment = () => {
        this.setState({
            counter:this.state.counter+1
        })
    }
    countDecriment = () => {
        this.setState({
            counter:this.state.counter-1
        })
    }

    render() {
        return (
            <div>
                <h1>Event</h1>
                <h2>Counter Component</h2>
                <button onClick={countIncriment} >+</button>
                <button onClick={countDecriment}>-</button>
            </div>
        )
    }
}

export default Counter;