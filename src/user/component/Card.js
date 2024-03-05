//imprt Card.module.css
import style from '../container/Card.module.css';
import React from 'react';

function Card({ data }) {
    // console.log(data);
    return (
        <>
            <body className={style.body}>
                <div  className={style.card}>
                    <div  className={style.name}>{data.name}</div>
                    <div  className={style.price}>${data.price}</div>
                    <div  className={style.expiry}>{data.expiry}</div>
                    <div  className={style.desc}>
                        {data.desc}
                    </div>
                </div>
            </body>
        </>
    );
}

export default Card;