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
            className="cart-page-container"
        >
            {context.cart.length > 0 ? <div></div> : <div><h1>Your cart is empty!</h1></div>}
        </motion.div>
    )
}

export default CartPage
