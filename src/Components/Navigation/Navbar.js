import React from 'react'
import './Navigation.css';

function Navbar() {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    <a href="/">NUWYNN.</a>
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className="nav-links">
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank" rel="noreferrer">Women</a>
                <a href="https://codepen.io/jo_Geek/" target="_blank" rel="noreferrer">Men</a>
                <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank" rel="noreferrer">Cart</a>
            </div>
        </div>
    )
}

export default Navbar

