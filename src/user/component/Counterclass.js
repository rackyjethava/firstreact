import React, { Component } from 'react';

class Counterclass extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            count:0
        }
    }
    
    render() {
        return (
            <div>
                 
            <h1>Count is:</h1>

            <button >+</button><button >-</button>
        
            </div>
        );
    }
}

export default Counterclass;