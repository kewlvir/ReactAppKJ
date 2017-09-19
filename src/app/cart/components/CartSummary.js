
import React from "react";
import PropTypes from "prop-types";

export default function CartSummary(props,context) { 
    console.log("Cart Summary  render");
        return (
            <div> 
            <h2>{context.appTitle} - Cart Summary - [{props.amount}]</h2>
            </div>
        )
} 

CartSummary.contextTypes = {
    appTitle:PropTypes.string
}

CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}