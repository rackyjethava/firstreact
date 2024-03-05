import React, { Component } from 'react';
import styls from '../container/Doctor.module.css';

class DoctorCard extends Component {
    render() {
        const { data } = this.props;

        // console.log(data);

        return (
            <>
                <body>
                    <div className={styls.card}>
                        <div className={styls.name}>{data.name}</div>
                        <div className={styls.degree}>{data.degree}</div>
                        <div className={styls.about}>{data.about}</div>
                        <div className={styls.fees}>${data.fees}</div>
                        <div className={styls.appo}>
                            <a href="#" className={styls.btn}>Book Now</a>
                        </div>
                    </div>
                </body>
            </>
        );
    }
}

export default DoctorCard;