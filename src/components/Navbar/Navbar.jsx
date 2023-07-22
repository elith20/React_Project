import React, {Component} from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


export default class Navbar extends Component{

    render(){
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
}