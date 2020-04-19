import * as type from '../constants/ActionTypes'

export const actAddToCart = (product,quantity) => {
    return {
        type: type.ADD_TO_CART,
        product:product,
        quantity:quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: type.CHANGE_MESSAGE,
        message
    }
}
