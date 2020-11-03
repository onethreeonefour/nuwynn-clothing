import React from 'react'
import './Navigation.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    <Link to="/">NUWYNN.</Link>
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
                <Link to="/women" >Women</Link>
                <Link to="/men" >Men</Link>
                <Link to="/cart" >Cart</Link>
            </div>
        </div>
    )
}

export default Navbar

