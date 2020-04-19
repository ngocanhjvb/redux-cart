import React from 'react';


class CartResult extends React.Component {
    showTotalPrice = (cart) => {
        var result = 0
        if (cart.length > 0) {
            cart.forEach((item) => {
                result += item.product.price * item.quantity;
            });
        }
        return result;
    }

    render() {
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalPrice(this.props.cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button"
                            className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartResult;
