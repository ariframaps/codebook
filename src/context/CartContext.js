import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "./reducer/CartReducer"

const initialState = {
    cartList: [],
    totalPrice: 0,
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    function addToCart(product) {
        const newCartList = state.cartList.concat(product)
        const newTotalPrice = state.totalPrice + product.price

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                cartList: newCartList,
                totalPrice: newTotalPrice
            }
        })
    }

    function removeFromCart(product) {
        const newCartList = state.cartList.filter(cartItem => cartItem.id !== product.id)
        const newTotalPrice = state.totalPrice - product.price

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                cartList: newCartList,
                totalPrice: newTotalPrice
            }
        })
    }

    const value = {
        cartList: state.cartList,
        totalPrice: state.totalPrice,
        addToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)