import React, { useEffect, useState, useContext } from 'react'
import { productsMen } from '../../Utilities/Men'
import { productsWomen } from '../../Utilities/Women'
import ImageGallery from 'react-image-gallery'
import { pageVariants, pageDuration } from '../../Utilities/FramerMotion'
import { motion } from 'framer-motion'
import { GlobalContext } from '../../Context/GlobalState';

function ProductDetail(props) {
    const [Product, setProduct] = useState([])
    const [Images, setImages] = useState([])
    const context = useContext(GlobalContext)

    useEffect(() => {
        if (props.match.params.id.slice(-1) === "F") {
            let images = [];
            const result = productsWomen.filter(product => product.id === props.match.params.id);
            result[0].images.map(item => {
                return images.push({
                    original: `../${item}`,
                    thumbnail: `../${item}`
                })
            })
            setImages(images);
            setProduct(result)
        } else {
            let images = [];
            const result = productsMen.filter(product => product.id === props.match.params.id);
            result[0].images.map(item => {
                return images.push({
                    original: `../${item}`,
                    thumbnail: `../${item}`
                })
            })
            setImages(images);
            setProduct(result)

        }
    }, [])

    return (
        <motion.div
            animate="in"
            initial="out"
            exit="out"
            variants={pageVariants}
            transition={pageDuration}
        >
            {Product.length > 0 ? <div className="product-detail-container">
                <ImageGallery items={Images} />
                <div className='product-detail-info'>
                    <h1>{Product[0].title}</h1>
                    <h3>{Product[0].type}</h3>
                    <h4>${Product[0].price}</h4>
                    <p>{Product[0].description}</p>
                    {Product[0].inCart === false ? <button className="cart-button">Add to Cart</button> :
                        <button className="cart-button" style={{ backgroundColor: 'orange' }}>Already In Cart</button>}

                </div>
            </div> :
                <div>
                    <h2>Loading</h2>
                </div>}

        </motion.div>
    )
}

export default ProductDetail
