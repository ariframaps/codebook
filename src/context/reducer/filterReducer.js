export const filterReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "PRODUCTS_LIST":
            return { ...state, productsList: payload.productsList };
        case "PRICE_SORT":
            return
        case "RATING_FILTER":
            return { ...state, ratingFilter: payload.ratingFilter }
        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerFilter: payload.bestSellerFilter }
        case "INSTOCK_ONLY":
            return { ...state, InstockFilter: payload.InstockFilter }
        default:
            break;
    }

    return
}
