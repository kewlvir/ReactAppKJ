
import * as ActionTypes from "./ActionTypes";

export  function addItem(product) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        item: {
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1
        }
    }
}

export function removeItem(id) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        id //id : id
    }
}

export function updateItem(id, qty) {
    return {
        type: ActionTypes.UPDATE_CART,
        id, //=> id : id
        qty //=> qty: qty
    }
}

export function emptyCart() {
    return {
        type: ActionTypes.EMPTY_CART
    }
}