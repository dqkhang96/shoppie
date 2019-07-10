import {
    LIKE_PRODUCT, REMOVE_LIKE_PRODUCT
  } from '../actions/type';
  export default function (state=[],action){
    switch(action.type){
        case LIKE_PRODUCT :
            if (state.find((item)=>item.id===action.product.id))
            return state
            else
            return [...state,action.product] 
            break
        case REMOVE_LIKE_PRODUCT:
            return state.filter((product)=>product.id !=action.id)
                
        default: return state
    }
  }