import { createContext, useState, useEffect } from 'react';
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
        cartTotal: 0
    })

    useEffect(() => {
        //Add Total is used everytime a item is added to the cart or if quantity is changed
        addTotals();
    }, [global.cartTotal])

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
            setGlobal({
                products: [productsMen, productsWomen],
                cart: [...global.cart, product],
                cartSubTotal: 0,
                cartTotal: price
            })
        }
        else {
            let tempProducts = [...global.products[0]];
            let found = tempProducts.findIndex(el => el.id === id);
            let product = tempProducts[found]
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            setGlobal({
                products: [productsMen, productsWomen],
                cart: [...global.cart, product],
                cartSubTotal: 0,
                cartTotal: price
            })

        }
    }
    //addTotals maps through cart array and adds totals together plus 10% tax
    const addTotals = () => {
        let subTotal = 0;
        global.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        setGlobal({
            products: [productsMen, productsWomen],
            cart: [...global.cart],
            cartSubTotal: 0,
            cartTotal: total
        })
    };


    const increment = (id) => {
        let tempCart = [...global.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.price * product.count;
        addTotals();
    }

    const decrement = (id) => {
        let tempCart = [...global.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        //console.log(product)
        if (product.count === 0) {
            removeItem(id);
        }
        else {
            product.total = product.price * product.count;
            addTotals();
        }

    }

    const getItem = (id) => {
        if (id.slice(-1) === "F") {
            const product = global.products[1].find(item => item.id === id);
            return product;
        }
        else {
            const product = global.products[0].find(item => item.id === id);
            return product;
        }

    }

    const removeItem = (id) => {
        if (id.slice(-1) === "F") {
            let tempProducts = [...global.products[1]];
            let tempCart = [...global.cart];
            tempCart = tempCart.filter(item => item.id !== id);
            const index = tempProducts.indexOf(getItem(id));
            let removedProduct = tempProducts[index];
            removedProduct.inCart = false;
            removedProduct.count = 0;
            removedProduct.total = 0;
            console.log(tempCart)
            setGlobal({
                products: [productsMen, productsWomen],
                cart: [...tempCart],
                cartTotal: 0
            })

        }
        else {
            let tempProducts = [...global.products[0]];
            let tempCart = [...global.cart];
            tempCart = tempCart.filter(item => item.id !== id);
            const index = tempProducts.indexOf(getItem(id));
            let removedProduct = tempProducts[index];
            removedProduct.inCart = false;
            removedProduct.count = 0;
            removedProduct.total = 0;
            setGlobal({
                products: [productsMen, productsWomen],
                cart: [...tempCart],
                cartTotal: 0
            })

        }
    }



    return (
        <GlobalContext.Provider
            value={{
                ...global,
                addToCart: addToCart,
                increment: increment,
                decrement: decrement
            }}>
            {children}
        </GlobalContext.Provider>
    );

}