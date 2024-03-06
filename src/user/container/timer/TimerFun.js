import React , { useState, useEffect } from 'react';
import style from "../timer/Timer.module.css"

function TimerFun() {
    const [time, setTime] = useState(new Date());

   const tick=()=>{
        console.log("tick");

        setTime(new  Date())
    };

    useEffect(() => {

        const timerRef=setInterval(tick,1000);

        return () => {
            clearInterval(timerRef);
        };

    }, []);

    return (
        <div className={style.container}>
            <div className={style.clock}>
                <h2>Timer Clock</h2>
                <h3>{time.toLocaleTimeString()}</h3>
            </div>
        </div>
    );

}

export default TimerFun;