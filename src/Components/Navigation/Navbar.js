import React from 'react'
import './Navigation.css';

function Navbar() {
    return (
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    NUWYNN.
            </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank" rel="noreferrer">Women</a>
                <a href="https://codepen.io/jo_Geek/" target="_blank" rel="noreferrer">Men</a>
                <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank" rel="noreferrer">Cart</a>
            </div>
        </div>
    )
}

export default Navbar

