
export const logger = store => next => action => {
    console.log("**ACtion type", typeof action);
    
    console.log('Logger Middleware dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}


export const cart = store => next => action => {
    console.log('Cart Middleware dispatching', action)
    
    let result = next(action)
    //store cart items into local storage
    if (action.type.indexOf("CART") >= 0) {
        let items = store.getState().cartState;
        localStorage.setItem("cart", JSON.stringify(items));
    }
    console.log('next state', store.getState())
    return result
}
  