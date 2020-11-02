import React, { useContext } from "react";
import Banner from '../../Images/Store/banner.jpg'
import { pageVariants, pageDuration } from '../../Utilities/FramerMotion'
import { motion } from 'framer-motion'
import { GlobalContext } from '../../Context/GlobalState';

function WomenStore() {
    const context = useContext(GlobalContext)

    return (
        <motion.div
            className="store-container"
            animate="in"
            initial="out"
            exit="out"
            variants={pageVariants}
            transition={pageDuration}
        >
            <div className="banner-container">
                <div className="centered"><h2>Experience Summer with NUWYNN</h2></div>
                <img src={Banner} alt="banner" className='banner-image'></img>
            </div>
            <h1 style={{ textAlign: 'center' }}>NUWYNN's Womens Collection</h1>
            <div className="store-grid-container">
                {context.products[1].map((item, index) => (
                    <a href={`product/${item.id}`} key={index} item={item}>
                        <div className='store-card'>
                            <img src={item.images[0]} alt="product"></img>
                            <h3>{item.title}</h3>
                            <h5>${item.price}</h5>
                        </div>
                    </a>
                ))}

            </div>
        </motion.div>
    )
}

export default WomenStore
