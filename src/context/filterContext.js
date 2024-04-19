import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "./reducer/filterReducer"

const initialState = {
    productsList: [],
    priceFilter: null,
    ratingFilter: null,
    bestSellerFilter: false,
    InstockFilter: false
}

export const filterContext = createContext(initialState)

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, initialState)

    const initialProductsList = (products) => {
        dispatch({
            type: 'PRODUCTS_LIST',
            payload: {
                productsList: products
            }
        })
    }

    const bestSellerDispatch = () => {
        dispatch({
            type: 'BEST_SELLER_ONLY',
            payload: {
                bestSellerFilter: !state.bestSellerFilter
            }
        })
    }

    function bestSeller(products) {
        return state.bestSellerFilter ? products.filter((product) => product.best_seller === true) : products
    }

    const filteredProductsList = bestSeller(state.productsList)

    const value = {
        state,
        productsList: filteredProductsList,
        initialProductsList,
        bestSellerDispatch
    }

    return (
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => useContext(filterContext)