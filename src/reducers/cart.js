import * as type from '../constants/ActionTypes'

var _ = require('lodash');

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : []


const cart = (state = initialState, action) => {
    var {product, quantity} = action
    switch (action.type) {
        case type.ADD_TO_CART:
            var index = _.findIndex(state, ['product', product]);
            if(index !== -1){
                state[index].quantity += quantity
            }else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state];
        default:
            return [...state];

    }
}

export default cart;
