import * as type from '../constants/ActionTypes'

var _ = require('lodash');

var data = JSON.parse(localStorage.getItem('CART'))
var de = [
    {
        product: {
            id: 3,
            name: 'Oppo F1s',
            image: 'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
            description: 'Sản phẩm do china sản xuất',
            price: 450,
            inventory: 5,
            rating: 5
        },
        quantity: 2
    },
    {
        product: {
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg',
            description: 'Sản phẩm do apple sản phẩm',
            price: 500,
            inventory: 10,
            rating: 4
        },
        quantity: 6
    }

]
var initialState = data ? data : de


const cart = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TO_CART:
            console.log(state)
        default:
            return [...state];

    }
}

export default cart;
