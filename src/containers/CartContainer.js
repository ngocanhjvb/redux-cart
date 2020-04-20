import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as message from "../constants/Messages"
import CartResult from "../components/CartResult";
import {actChangeMessage, actDeleteProductInCart, actUpdateProductInCart} from "../actions";

class CartContainer extends React.Component {

    showCartItem = (cart) => {
        let result = <tr>
            <th>{message.MSG_CART_EMPTY}</th>
        </tr>
        let {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} = this.props;
        if (cart.length > 0) {
            result = cart.map((cartItem, index) => {
                return <CartItem
                    actDeleteProductInCart={actDeleteProductInCart}
                    actChangeMessage={actChangeMessage}
                    actUpdateProductInCart={actUpdateProductInCart}
                    key={index}
                    cartItem={cartItem}/>
            })
        }
        return result;
    }

    showCartResult = (cart) => {
        let result = null;
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
    ).isRequired,
    actChangeMessage : PropTypes.func.isRequired,
    actDeleteProductInCart : PropTypes.func.isRequired,
    actUpdateProductInCart : PropTypes.func.isRequired
};


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        actChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        actUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
