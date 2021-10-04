import React, { useEffect, useState } from 'react';
import TopServices from '../TopServices/TopServices';

const TopServiceLoad = () => {
    const [topService, setTopService] = useState([]);

    useEffect (
        () => {
          fetch('./topservice.JSON')
          .then(res => res.json())
          .then(data => setTopService(data));
        }, [])

    return (
        <div className="service-bucket">
            <div className="service-list">
            {
    topService.map(top =>  <TopServices
    key={top.id} 
    top={top}
    ></TopServices>)
}
            </div>

        </div>
    );
};

export default TopServiceLoad;