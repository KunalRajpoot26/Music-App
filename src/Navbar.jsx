import React from "react";
import './navbar.css';
import logo from './logo.webp';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    {/* <img src={logo}></img> */}
                </div>
                <div className="search-box">
                    <button><img className="search-icon" src="src\search-icon.gif"></img></button>
                    <input className="search-input" type="search" placeholder="What do you want to play" role="combobox"></input>
                </div>
            </div>
        </>
    )
}

export default Navbar;