import React,{useState} from 'react';

function CityFun(props) {

    const[City,setCity]=useState('Surat')
    const[Adress,setAdress]=useState('Katargam')

    const changedata=()=>{
        setCity('Ahemdavad')
        setAdress('Varacha')
    }
    return (
        <div>
            <h1>City:{City}</h1>
            <h2>Adress is{Adress}</h2>

            <button onClick={changedata}>change data</button>
        </div>
    );
}

export default CityFun;