import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState';
import { pageVariants, pageDuration } from '../../Utilities/FramerMotion'
import { motion } from 'framer-motion'

function CartPage() {
    const context = useContext(GlobalContext)

    return (
        <motion.div
            animate="in"
            initial="out"
            exit="out"
            variants={pageVariants}
            transition={pageDuration}

        >
            {context.cart.length > 0 ?
                <div className="cart-page-container">
                    <h1>Your Cart</h1>
                    {context.cart.map((cart, index) => (
                        <div key={index} className="cart-grid-container">
                            <img src={cart.images[0]} alt="product"></img>
                            <p>{cart.title}</p>
                            <p>${cart.price}</p>
                            <div className='qtn-control'>
                                <span className="qtn-btn" onClick={() => context.decrement(cart.id)}>-</span>
                                <span className="qtn-btn">{cart.count}</span>
                                <span className="qtn-btn" onClick={() => context.increment(cart.id)}>+</span>
                            </div>
                        </div>
                    ))}
                    <h2>Total: {context.cartTotal.toFixed(2)}<span><h5>10% Tax Included</h5></span></h2>
                    <button>Purchase</button>
                </div> :

                <div className="empty-cart-page-container"><h1>Your cart is empty!</h1></div>}
        </motion.div>
    )
}

export default CartPage
