import React from 'react';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import ServiceTitle from '../ServiceTitle/ServiceTitle';
import TopServices from '../TopServices/TopServices';
import './Home.css';

const Home = () => {
   
   const [services] = useServices();
    return (
        <div>
                  <Banner ></Banner>
                  <ServiceTitle></ServiceTitle>
                  
            <div className="topService-list">
             {
                 services.slice(0,4).map(service =>  <TopServices 
                    key={service.id} 
                    service={service}
                    ></TopServices>
                 )
             }
             </div>
             </div>
    );
};

export default Home;