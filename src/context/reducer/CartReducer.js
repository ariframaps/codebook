export const CartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_TO_CART':
        case 'REMOVE_FROM_CART':
        case 'CLEAR_CART':
            return { ...state, cartList: payload.cartList, totalPrice: payload.totalPrice }
        default:
            throw new Error('gaada reducer yang beginii')
    }
}