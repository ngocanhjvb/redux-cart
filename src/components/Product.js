import React from 'react';
import * as message from '../constants/Messages'
var _ = require('lodash');


class Product extends React.Component {

    onAddToCart = (product) => {
        var index = _.findIndex(this.props.cart, ['product', product]);
        this.props.onAddToCart(product)
        if(index !== -1){
            this.props.actChangeMessage(message.MSG_UPDATE_CART_SUCCESS)
        }else {
            this.props.actChangeMessage(message.MSG_ADD_TO_CART_SUCCESS)
        }
    }


    showRating = (rating) => {
        let result = []
        for (var i = 0; i < rating; i++) {
            result.push(<li key={i}><i className="fa fa-star"></i></li>)
        }
        for (let j = 0; j < (5 - rating); j++) {
            result.push(<li key={j + i}><i className="fa fa-star-o"></i></li>)
        }
        return result;
    }

    render() {
        let {product} = this.props
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img
                            src={product.image}
                            className="img-fluid" alt=""/>
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                            <a
                                                onClick={ () => this.onAddToCart(product)}
                                                className="btn-floating blue-gradient" data-toggle="tooltip"
                                                data-placement="top" title="" data-original-title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Product;
