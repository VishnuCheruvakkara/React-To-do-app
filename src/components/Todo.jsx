
//=========================  fucntion based

// function Header() {
//     return (
//     <div>
//         <h1>Hai...</h1>
//     </div>)
// }

// export default Header


//========================  class based

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Todo extends Component{
    render() {
        return (
            <div>
                <h1>Todo Component</h1>
                <h2>{ this.props.sendingData}</h2>
            </div>
        );
    }
}

// Todo.PropTypes ={
// }

export default Todo;