import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar(){

    return <>
    <div className="menu">
        <Link to='/'>
        Home
        </Link>
        <Link to='/about'>
        About 
        </Link>
    </div>
    </>
    
}