import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        this.state={
            cityName:'Surat',
            Adress:'varacha'
        }
        console.log(this.props.countryname);
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
            <h1>My City is:{this.props.countryname==='india' ?'Surat':'New york'}</h1> 
            <h2>i am Live at:{this.state.Adress}</h2>
            <h3>djhfbjk:{this.props.countryname}</h3>

            <button onClick={this.changecity}>Change Data</button>
            
            </>
            
                
            
        );
    }
}

export default City;