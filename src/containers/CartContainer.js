import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as message from "../constants/Messages"
import CartResult from "../components/CartResult";
import {actDeleteProductInCart} from "../actions";

class CartContainer extends React.Component {

    showCartItem = (cart) => {
        let result = <tr>
            <th>{message.MSG_CART_EMPTY}</th>
        </tr>
        if (cart.length > 0) {
            result = cart.map((cartItem, index) => {
                return <CartItem actDeleteProductInCart={this.props.actDeleteProductInCart} key={index} cartItem={cartItem}/>
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
    ).isRequired
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
