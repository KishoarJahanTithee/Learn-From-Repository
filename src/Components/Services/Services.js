import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setservices] = useState([]);

    useEffect(
        () => {
          fetch('./service.JSON')
          .then(res => res.json())
          .then(data => setservices(data));
        }, [])

    return (
        <div className="service-bucket">
            <div className="service-list">
            {
    services.map(service =>  <Service
    key={service.id} 
    service={service}
    ></Service>)
       }
            </div>
        </div>
    );

};

export default Services;