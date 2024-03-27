import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increments } from '../../../redux/action/counter.action';

import { decrement } from '../../../redux/action/counter.action';


function Counter(props) {
    const countVal = useSelector(state => state.counter.count)
    console.log(countVal);

    const dispatch = useDispatch()

    const handleinc = () => {
        dispatch(increments())
    }

    const handledec = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick={handleinc}>+</button>
            {countVal}
            <button onClick={handledec}>-</button>
        </div>
    );
}

export default Counter;