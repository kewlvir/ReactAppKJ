
import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
//for SEO, Title bar update
import {Helmet} from "react-helmet";

import ProductWidget from "../containers/ProductWidget";

//Issue 1
import * as ProductApi from "../ProductApi";
 

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getProducts();
    }
    componentDidMount2() {
        this.props.actions.loading(true);

        ProductApi.getProducts()
        .then ( products => {
            this.props.actions.initProducts(products);
            this.props.actions.loading(false);
        })
    }
     
    render() {

        if (this.props.loading){

            return(
<h2>Loading Products...</h2>

            )
        }
        
                let list= this.props
                     .products.map ( product => (
                         <ProductWidget key={product.id} product={product}>
                            {product.name}
                         </ProductWidget>
                     ))
        
                return (
                     
                    <div>
                         <Helmet>
                            <title>Products List</title>
                         </Helmet>

                        <h2>Cart Size [{this.props.cartSize}] </h2>
                        <div className="flex two">
                            {list}
                        </div>
                    </div>
        
                )
            }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}