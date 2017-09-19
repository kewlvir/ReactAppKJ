
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {

static contextType = {
    appTitle: PropTypes.string
}


    constructor(props,context) {
        super(props,context);

        this.state = {
            qty: props.item.qty
        }
    }
    
    componentDidMount() {
        
    }

    onValueChange(e) {
        console.log(e.target.value);
        this.setState({
            qty: e.target.value
        })
    }
    
    //item as props
    render() {

        console.log("Cart Item render called " + this.context.appTitle);

        
        //let item = this.props.item;

        let {
            item, 
            onUpdate,
            onRemove
        } = this.props;

        return (
           <tr>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>
                   
                   <input value={this.state.qty}
                          type="number"
                          onChange={ (e) => this.onValueChange(e)}
                          onBlur={()=> onUpdate(item.id,this.state.qty)}
                    />
                   
                </td>

                <td> 
                    {item.total}
                </td>

                <td>
                    <button onClick={()=> onUpdate(item.id, this.state.qty)} >
                        Update
                    </button>
                </td>

                <td>

                    <button  onClick={() => onRemove(item.id)}>
                    Remove
                    </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}