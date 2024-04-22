export const CartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'CART_INITIALIZATION':
        case 'ADD_TO_CART':
        case 'REMOVE_FROM_CART':
            return { ...state, cartList: payload.cartList }
        default:
            throw new Error('gaada reducer yang beginii')
    }
}