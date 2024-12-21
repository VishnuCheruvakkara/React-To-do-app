
import React, { Component } from "react";

class Forms extends Component {
    state = {
        firstName: "",
        lastName: "",
    }
    onHandleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
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
                    <input name="firstName" type="text" value={this.state.firstName} onChange={this.onHandleChange} />
                    <input name="lastName" type="text" value={this.state.lastName} onChange={this.onHandleChange} />
                    <button type="button" onClick={this.onSubmit}>Submit</button></form>
                <h4>{this.state.firstName}</h4>
                <h4>{this.state.lastName}</h4>
            </div>
        )
    }
}

export default Forms;