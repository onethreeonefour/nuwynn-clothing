import React, { useState } from "react";
import Banner from '../../Images/Store/banner.jpg'
import { checkboxes } from './Section/Checkbox';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
    console.log("Checkbox: ", name, checked);

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
        <div className="store-container">
            <div className="banner-container">
                <div class="centered"><h2>Experience Summer with NUWYNN</h2></div>
                <img src={Banner} alt="banner" className='banner-image'></img>
            </div>
            <h1>WOMEN SELECTION</h1>
            <div className="store-grid-container">
                <div className="store-top-navigation">
                    <h5>Home</h5>
                    <h5>Items Found</h5>
                </div>
                <div className="store-side-navigation">
                    <h2>Categories</h2>
                    {checkboxes.map(item => (
                        <label key={item.key}>
                            <Checkbox
                                name={item.name}
                                checked={checkedItems[item.name]}
                                onChange={handleChange}
                            />
                            {item.name}
                        </label>
                    ))}
                </div>
                <div className="store-cards">

                </div>
            </div>
        </div>
    )
}

export default WomenStore
