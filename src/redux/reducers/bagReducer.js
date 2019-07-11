import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/type'
export default function (state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.product]
        case REMOVE_FROM_CART:
            return state.filter(pr => pr.id !== action.id)
        default: return state
    }
}