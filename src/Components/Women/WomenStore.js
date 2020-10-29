import React, { useState } from "react";
import Banner from '../../Images/Store/banner.jpg'
import { checkboxes } from '../../Utilities/Checkbox';
import { productsWomen } from '../../Utilities/Women';
import { pageVariants, pageDuration } from '../../Utilities/FramerMotion'
import { motion } from 'framer-motion'


const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
    //console.log("Checkbox: ", name, checked);

    return (
        <input type={type} name={name} checked={checked} onChange={onChange} />
    );
};

function WomenStore() {

    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = event => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked
        });

    };

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
                <div class="centered"><h2>Experience Summer with NUWYNN</h2></div>
                <img src={Banner} alt="banner" className='banner-image'></img>
            </div>
            <h1>NUWYNN's Womens Collection</h1>
            <div className="store-grid-container">
                <div className="store-side-navigation">
                    <h3>Categories</h3>
                    {checkboxes.map(item => (
                        <label key={item.key}>
                            <Checkbox
                                name={item.name}
                                checked={checkedItems[item.name]}
                                onChange={handleChange}
                                className="checkbox"
                            />
                            &emsp;{item.name}
                        </label>
                    ))}
                </div>
                {productsWomen.map((item, index) => (
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
