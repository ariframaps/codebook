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

    const inStockDispatch = () => {
        dispatch({
            type: 'INSTOCK_ONLY',
            payload: {
                InstockFilter: !state.InstockFilter
            }
        })
    }

    const ratingDispatch = (value) => {
        dispatch({
            type: 'RATING_FILTER',
            payload: {
                ratingFilter: value
            }
        })
    }

    function bestSeller(products) {
        return state.bestSellerFilter ? products.filter((product) => product.best_seller === true) : products;
    }

    function inStock(products) {
        return state.InstockFilter ? products.filter((product) => product.in_stock === true) : products;
    }

    function rating(products) {
        switch (state.ratingFilter) {
            case 'stars_4':
                return products.filter((product) => product.rating >= 4)
            case 'stars_3':
                return products.filter((product) => product.rating >= 3)
            case 'stars_2':
                return products.filter((product) => product.rating >= 2)
            case 'stars_1':
                return products.filter((product) => product.rating >= 1)
            default:
                return products
        }
    }

    const filteredProductsList = rating(inStock(bestSeller(state.productsList)))

    const value = {
        state,
        productsList: filteredProductsList,
        initialProductsList,
        bestSellerDispatch,
        inStockDispatch,
        ratingDispatch
    }

    return (
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => useContext(filterContext)