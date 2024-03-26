import { INCREMENT_COUNTER } from "../reducer/ActionType"



 export const increments=()=>(dispatch)=>{
    dispatch({type: INCREMENT_COUNTER})
 }