
import React, { Component } from "react";
class Counter extends Component{
    state = {
        counter:0
    }
    incriment = () => {
        this.setState({
            counter: this.state.counter += 1
        });
    };
    decriment = () => {
        this.setState({
            counter:this.state.counter-=1
        })
    }
    render() {
        return (
            <div>
                <h2>Coutner Component</h2>
                <button onClick={this.incriment}>+</button>
                <button onClick={this.decriment}>-</button>
                <h3>{ this.state.counter}</h3>
            </div>
        )
    }
}

export default Counter