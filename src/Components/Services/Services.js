import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    // const [services, setservices] = useState([]);

    // useEffect(
    //     () => {
    //       fetch('./service.JSON')
    //       .then(res => res.json())
    //       .then(data => setservices(data));
    //     }, [])

    const [services] = useServices();

    return (

            <div className="service-list">
                
            {
    services.map(service =>  <Service
    key={service.id} 
    service={service}
    ></Service>)
       }
            </div>
    );

};

export default Services;