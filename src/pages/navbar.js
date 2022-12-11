import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";


export default function Navbar () {
    return(
        <div id="navbar">
            <div className="container">
                <div className="logo">
                    <h1>
                        <NavLink to="/">Muturu Breed</NavLink>
                    </h1>
                </div>
                <div className="navlist">
                    <ul>
                        <li> <NavLink to="/"> Home </NavLink> </li>
                        <li> <NavLink to="/ourteam"> Our Team </NavLink> </li>
                        <li> <NavLink to="/gallery"> Gallery </NavLink> </li>
                        <li> <NavLink to="/projects"> Projects </NavLink> </li>
                        <li> <NavLink to="/contact"> Contact Us </NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}