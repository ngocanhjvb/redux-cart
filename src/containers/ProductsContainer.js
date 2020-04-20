import React from 'react';
import {connect} from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from 'prop-types';
import {actAddToCart,actChangeMessage} from "../actions/index";

class ProductsContainer extends React.Component {
    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    cart={this.props.cart}
                    onAddToCart={this.props.onAddToCart}
                    actChangeMessage={this.props.actChangeMessage}
                />
            })
        }
        return result;
    }

    render() {
        return (
            <Products>
                {this.showProducts(this.props.products)}
            </Products>
        );
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            inventory: PropTypes.number,
            rating: PropTypes.number
        })
    ).isRequired
};


const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        actChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
