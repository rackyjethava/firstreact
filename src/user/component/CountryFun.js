import React,{useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const[Country,setCountry]=useState('India')
    const[TimeZone,setTimezone]=useState('GMT 5:30+')

    const changedata=()=>{
        setCountry('USA')
        setTimezone('GMT 6:00')
    }
    
    
    return (
        <div>
            <h1>Country: {Country}</h1>
            <h1>Timezone is:{TimeZone}</h1>
            <button onClick={changedata}>change data</button>

            <CityFun cn={Country} />
        
        </div> 
    );
}

export default CountryFun;