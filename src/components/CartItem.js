import React from 'react';


class CartItem extends React.Component {
    subTotalPrice = (price, quantity) => {
        return price * quantity;
    }

    render() {
        var {cartItem} = this.props
        return (
            <tr>
                <th scope="row">
                    <img
                        src={cartItem.product.image}
                        alt="" className="img-fluid z-depth-0"/>
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cartItem.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.subTotalPrice(cartItem.product.price, cartItem.quantity)}$</td>
                <td>
                    <button type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light"
                            data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }

}

export default CartItem;
