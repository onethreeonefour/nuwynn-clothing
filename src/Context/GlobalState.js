import { createContext, useState } from 'react';
import { productsMen } from '../Utilities/Men';
import { productsWomen } from '../Utilities/Women';

//Create Context
export const GlobalContext = createContext();

// Provider Component - This provides state, functions to any components thats wrapped around ContextProvider
export const GlobalProvider = ({ children }) => {
    //Initial State
    const [global, setGlobal] = useState({
        products: [productsMen, productsWomen],
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    })

    const addToCart = (id) => {
        //Get last letter of ID - then go through array of products which could either be male or female
        if (id.slice(-1) === "F") {
            //set temp array 
            let tempProducts = [...global.products[1]];
            //find index of item from temp array
            let found = tempProducts.findIndex(el => el.id === id);
            let product = tempProducts[found]
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            // console.log(product)
            // console.log(tempProducts)
            setGlobal(global.cart.push(product))
            console.log(global)

        }
    }

    return (
        <GlobalContext.Provider
            value={{
                ...global,
                addToCart: addToCart
            }}>
            {children}
        </GlobalContext.Provider>
    );

}