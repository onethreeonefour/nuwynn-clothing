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
                <a href="/women" >Women</a>
                <a href="/men" >Men</a>
                <a href="/cart" >Cart</a>
            </div>
        </div>
    )
}

export default Navbar

