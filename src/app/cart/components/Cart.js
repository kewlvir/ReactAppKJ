
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";


export default class Cart extends PureComponent {
    constructor(props) {
        
        super(props);

        console.log("CArt component created");

        this.id = 10;
    }

    addItem() {
        
        let item =  {
            id: this.id++,
            name: 'phone ' + this.id,
            price: 8000,
            qty: 1,
            total : 0
        }
 
        this.props.addItem(item);
    }

    touch() {
        
    }

    removeItem(id) {
         
            this.props.actions.removeItem(id);
        
    }

    updateQty(id, qty) {

            this.props.actions.updateItem(id,qty);
       
    }

     
       
    render() {
        console.log("cart comp render");

        return (
            <div> 
            <h2>Cart </h2>

            <button onClick={() => this.addItem()}>
                Add Item
            </button>


            <button onClick={() => this.touch()}>
                Touch
            </button>

            {/* Issue 2 */}
            <CartList items={this.props.items}
                      onUpdate={ (id, qty) => this.updateQty(id, qty)}
                      onRemove = { id => this.removeItem(id)}
             />

            <CartSummary amount={this.props.amount}
                         
             />
            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}
