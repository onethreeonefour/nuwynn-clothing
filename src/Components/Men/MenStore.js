import React from 'react'
import Banner from '../../Images/Store/banner.jpg'
function MenStore() {
    return (
        <div className="store-container">
            <div className="banner-container">
                <div class="centered"><h2>Experience Summer with NUWYNN</h2></div>
                <img src={Banner} alt="banner" className='banner-image'></img>
            </div>
            <h1>MEN SELECTION</h1>
            <div className="store-grid-container">
                <div>

                </div>
            </div>
        </div>
    )
}

export default MenStore
