import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "./reducer/CartReducer"

const initialState = {
    cartList: [],
    totalPrice: 0,
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartContext, initialState)

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