import React,{useState } from 'react';

function CityFun(props) {

    const[City,setCity]=useState('Surat')
    const[Adress,setAdress]=useState('Katargam')

 
    changedata(() => {
        if (props.country === 'USA') {
            setCity('New York');
            setAddress('Time Square');
        } else {
            setCity('Surat');
            setAddress('Katargam');
        }
    }, [props.country]);
 
    return (
        <div>
            <h1>City:{City}</h1>
            <h2>Adress is:{Adress}</h2>

            <button onClick={changedata}>change data</button>
        </div>
    );
}

export default CityFun;