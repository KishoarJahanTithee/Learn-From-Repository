import React from 'react';
import './TopServices.css';

const TopServices = (props) => {

    const {serviceName, img, details} = props.service;


    return (
       
        <div className="list-card">
        <div className="card">
<h3>{serviceName}</h3>
<img src={img} alt="" />
<p>{details}</p>
</div>
</div>
    );
};

export default TopServices;