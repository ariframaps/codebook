export const filterReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "PRODUCTS_LIST":
            return { ...state, productsList: payload.productsList };
        case "PRICE_SORT":
            return
        case "RATING_FILTER":
            return
        case "BEST_SELLER_ONLY":
            return
        case "INSTOCK_ONLY":
            return
        default:
            break;
    }

    return
}
