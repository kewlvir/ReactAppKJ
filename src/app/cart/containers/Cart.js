import {connect} from "react-redux";


import {bindActionCreators} from "redux";

import * as Actions from "../Actions";

import Cart from "../components/Cart";

//state ==> store.getState()
let mapReduxStateToCompProps = function(state) {
    return {
        //propName: value
        items: state.cartState,
        amount: 0
    }
} 

let mapDispatchToCompProps = function(dispatch) {
    return {
        //Version 1
        //Issue: Actions to be imported in Component
        //dispatch: dispatch

        //Version 2
        //addItem : (item) => dispatch(Actions.addItem(item))

        //Version 3: alternative to version 2
        addItem: bindActionCreators(Actions.addItem, dispatch),

        //patch addItem, removeItem, empty.. 
        //props.actions.addItem
        //props.actions.removeItem
        actions: bindActionCreators(Actions, dispatch)


    }
}

let connectFn = connect(mapReduxStateToCompProps,
                        mapDispatchToCompProps
);

let CartContainer = connectFn(Cart);

export default CartContainer;