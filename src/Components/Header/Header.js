import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "rgb(88, 190, 190)",
        fontSize: "larger"
    }
    return (
        <div className="navbar">
        <nav>
        <NavLink activeStyle = { activeStyle } to = "/home" className="navlink">Home</NavLink>
        <NavLink activeStyle = { activeStyle } to = "/services" className="navlink"> Services </NavLink> 
        <NavLink activeStyle = { activeStyle } to = "/trending" className="navlink"> Trending </NavLink> 
        <NavLink activeStyle = { activeStyle } to = "/about" className="navlink"> <Button variant="outlined">About</Button> </NavLink> 
        </nav>
        </div>
    );
};

export default Header;