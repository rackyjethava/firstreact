import React from 'react';
import { useDispatch } from 'react-redux';
import { increments } from '../../../redux/action/counter.action';

import { decrement } from '../../../redux/action/counter.action';

function Counter(props) {

    const dispatch=useDispatch()
    const handleinc=()=>{
        dispatch(increments())
    }

    const handledec=()=>{
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick={handleinc}>+</button>
        {0}
            <button onClick={handledec}>-</button>
        </div>
    );
}

export default Counter;