import { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer.js'
import { productsMen } from '../Utilities/Men';
import { productsWomen } from '../Utilities/Women';

//Initial State
const initialState = {
    products: [],
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
}


//Create Context
export const GlobalContext = createContext(initialState);

// Provider Component - This provides state, functions to any components thats wrapped around ContextProvider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);



    return (
        <GlobalContext.Provider
            value={{
                ...initialState,

            }}>
            {children}
        </GlobalContext.Provider>
    );

}