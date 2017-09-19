import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = []

export default function cartReducer(state = INITIAL_STATE, action){
    console.log("cart Reducer", state, action);

    switch(action.type) {
        case ActionTypes.ADD_ITEM_TO_CART:  {
            let item = state.find( item => item.id == action.item.id);
            if (!item) { //item not found, add here
                return [...state, action.item]
            }

            return state.map ( item => {
                if (item.id != action.item.id) 
                    return item;
 
                return Object.assign({}, item, {qty: item.qty + action.item.qty});
            })
        }

        case ActionTypes.REMOVE_ITEM_FROM_CART : {
            return state.filter( item => item.id != action.id)
        }

        case ActionTypes.UPDATE_CART : {
            return state.map (item => {
                if (item.id != action.id)
                        return item;
                let total = action.qty * item.price;
                return Object.assign({}, item, {qty: action.qty, total});
            })
        }

        case ActionTypes.EMPTY_CART : {
            return []
        }

        default:
            return state;



    }
}