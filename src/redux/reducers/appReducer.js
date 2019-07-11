import {SWITCH_LANGUAGE} from '../actions/type'

export default function appReducer(state={lang:"vi-VN"},action){
    switch(action.type){
        case SWITCH_LANGUAGE:return {...state,lang:action.lang}
        default:return state
    }
}