import React from 'react'
import Women from '../../Images/Hero/2.jpg';
import Men from '../../Images/Hero/3.jpg'
import { motion } from 'framer-motion'
import { pageVariants, pageDuration } from '../../Utilities/FramerMotion'

function Landing() {
    return (
        <motion.div
            className="hero-container"
            animate="in"
            initial="out"
            exit="out"
            variants={pageVariants}
            transition={pageDuration}
        >
            <div className="hero-card-container">
                <div className="text-overlay">
                    <h1>This is Nuwynn</h1>
                    <h3>Modern. Design. Comfort.</h3>
                    <div>
                        <a href="/women"><button>Shop Women</button></a>
                        <a href="/men"><button>Shop Men</button></a>
                    </div>
                </div>
                <div>
                    <img src={Women} alt="hero-women"></img>
                </div>
                <div>
                    <img src={Men} alt="hero-man"></img>
                </div>
                <div className="hero-card-bottom">
                    <div className="hero-card-bottom-grid">
                        <p>Free Shipping For All Returns</p>
                        <p>Student Discounts</p>
                        <p>Same Day Shipping Available</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Landing
