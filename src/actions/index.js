import * as type from '../constants/ActionTypes'

export const actAddToCart = (product,quantity) => {
    return {
        type: type.ADD_TO_CART,
        product:product,
        quantity:quantity
    }
}
