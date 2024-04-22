import { createContext, useContext } from "react"

const initialState = {
    cartList: [],
    totalPrice: 0,
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
    const value = {
        cartList: [1, 2, 3, 1, 1, 1]
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)