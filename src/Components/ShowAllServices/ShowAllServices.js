import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './ShowAllServices.css';

const ShowAllServices = () => {
    return (
        <div className='showAllServices'>
            <br />
                <NavLink to = "/services" className="navlink"> <Button variant="contained">Show All Services >></Button> </NavLink> 
        </div>
    );
};

export default ShowAllServices;