import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './Trending.css'

const Trending = () => {
    return (
        <div>
            <div className="trends">
                <h4>Digital Marketing</h4>
                <img src="https://www.springboard.com/library/static/e0b29052b2928958a4daec7dc3355054/c1b63/08-07-_-banner.png"></img>
                <br />
                <NavLink to = "/services" className="navlink"> <Button variant="contained">See all</Button> </NavLink> 
            </div>
            <div className="trends">
                <h4>Programming</h4>
                <img src="https://miro.medium.com/max/740/0*Bf2XfANlR1SF9S6H."></img>
                <br />
                <NavLink to = "/services" className="navlink"> <Button variant="contained">See all</Button> </NavLink> 
            </div>
            <div className="trends">
                <h4>Child Ethics</h4>
                <img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/12/15/79283.jpg"></img>
                <br />
                <NavLink to = "/services" className="navlink"> <Button variant="contained">See all</Button> </NavLink> 
            </div>
            <div className="trends">
                <h4>Skill Gain</h4>
                <img src="https://images.benefitspro.com/contrib/content/uploads/sites/412/2019/12/SkillsMappingShutterstock.jpg"></img>
                <br />
                <NavLink to = "/services" className="navlink"> <Button variant="contained">See all</Button> </NavLink> 
            </div>
        </div>
    );
};

export default Trending;