import {SWITCH_LANGUAGE} from '../actions/type'
import CustomI18n from '../../util/i18n';


export default function appReducer(state={lang:CustomI18n.locale},action){
    switch(action.type){
        case SWITCH_LANGUAGE:return {...state,lang:action.lang}
        default:return state
    }
}