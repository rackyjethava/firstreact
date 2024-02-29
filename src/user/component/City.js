import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        this.state={
            cityName:'Surat',
            Adress:'varacha'
        }
    }

    changecity=()=>{
        console.log("sjdh");

       this.setState({
            cityName:'Ahemdabad',
            Adress:'Katargam'

        })
    }
    

    render() {
        return (
            <>
            <h1>My City is:{this.state.cityName}</h1>
            <h2>i am Live at:{this.state.Adress}</h2>

            <button onClick={this.changecity}>Change Data</button>
            
            </>
            
                
            
        );
    }
}

export default City;