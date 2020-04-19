import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as message from "../constants/Messages"
import CartResult from "../components/CartResult";

class CartContainer extends React.Component {

    showCartItem = (cart) => {
        let result = message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((cartItem, index) => {
                return <CartItem key={index} cartItem={cartItem}/>
            })
        }
        return result;
    }

    showCartResult = (cart) => {
        let result = message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = <CartResult cart={cart}/>
        }
        return result;
    }

    render() {
        var {cart} = this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartResult(cart)}
            </Cart>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.object.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired
};


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps, null)(CartContainer)
