import React from 'react';

const TopServices = (props) => {
    const {serviceName, img, details} = props.top;

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