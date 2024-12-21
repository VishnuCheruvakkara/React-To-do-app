
import React, { Component } from "react";

class Forms extends Component {
    state = {
        inputValue: ""
    }
    onHandleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.inputValue)
    }
    render() {
        return (
            <div>
                <form action="">
                    <h2>Display Input</h2>
                    <input type="text" value={this.state.inputValue} onChange={this.onHandleChange} />
                    <button type="button" onClick={this.onSubmit}>Submit</button></form>
                <h4>{this.state.inputValue}</h4>
            </div>
        )
    }
}

export default Forms;