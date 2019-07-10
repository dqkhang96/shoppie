import {ADD_TO_CART} from '../actions/type'
export default function (state=[],action){
    switch (action.type) {
        case ADD_TO_CART :
            return [...state,action.product]

        default : return state
    }
}