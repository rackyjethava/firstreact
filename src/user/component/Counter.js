
import { useState } from "react";
import React from 'react';

function Counter(props) {

    const[count, setCount] = useState(0);

    const changedata=()=>{
            // console.log("djkf");
            if(count<5){
                setCount(count+1)
            }
    }

    const Countremove=()=>{
        // console.log("sdkj");

        if(count>0){
            setCount(count-1)
        }
    }
    
    return (
        <div>
            <h1>Count is:{count}</h1>

            <button onClick={changedata}>+</button><button onClick={Countremove}>-</button>
        </div>
    );
}

export default Counter;