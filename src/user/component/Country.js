import React, { Component } from 'react';
import City from './City';

class Country extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            name:'india',
            timzone:'GMT 5:30+'

        }
    }
    changeData=()=>{
        console.log("sdjkh");

    this.setState({
        name:'USA',
        timzone:'GMT-5'
    })
    }
    
    render() {
        return (
            <>
                <h1>My Country is {this.state.name}</h1>
                <h2>TimeZone is: {this.state.timzone}</h2>

                <button onClick={this.changeData}>Chang data</button>

                <City countryname={this.state.name}/>
            </>
        );
    }
}

export default Country;