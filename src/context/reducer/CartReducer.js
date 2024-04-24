export const CartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_TO_CART':
        case 'REMOVE_FROM_CART':
            return { ...state, cartList: payload.cartList, totalPrice: payload.totalPrice }
        case 'CLEAR_CART':
            return { payload }
        default:
            throw new Error('gaada reducer yang beginii')
    }
}