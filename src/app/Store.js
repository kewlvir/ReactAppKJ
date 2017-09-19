import {createStore, 
        combineReducers,
        applyMiddleware
    } from "redux";

import cartReducer from "./cart/Reducer";
import productReducer from "./product/Reducer";

import {cart, logger} from "./Middleware";
//async middleware
import thunk from "redux-thunk";


let items = [];
if (localStorage.cart) {
    items = JSON.parse(localStorage.cart);
}

//store.getState => [{id: 1}]

let rootReducer = combineReducers({
    cartState: cartReducer,
    productState: productReducer
})

//store.getState() => { cartState: [{id: 1}], 
//                      productState: {...}}

const store = createStore(rootReducer, { cartState: items},
    applyMiddleware(thunk, logger, cart )

);

import * as Actions from "./cart/Actions";

// let action = Actions.addItem({id: 1});

// console.log("before dispatch ", 
//         store.getState());

// store.dispatch(action)


// console.log("after dispatch ", 
// store.getState());


export default store;