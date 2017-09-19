import * as ActionTypes from "./ActionTypes";

import * as ProductApi from "./ProductApi";

export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        products
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        loading: status
    }
} 



export function getProducts() {
    //middleware calls this function
    //dispatch given by middlware (thunk)
    return function(dispatch) {
        //We need dispatch
        dispatch(loading(true));
            //for unit testing
            return ProductApi.getProducts()
            .then ( products => {
                //dispatch needed
                dispatch(initProducts(products)); //{type: 'INI.., products:[]}
                //dispatch needed
                dispatch(loading(false));
            })
    }

}