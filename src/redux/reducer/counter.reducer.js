
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType";



const intialValue = {
    isLOading: false,
    count: 0,
    error: false

}

export const counterReducer = (state = intialValue, action) => {
    console.log(action);

    switch (action.type) {
        case INCREMENT_COUNTER:
            return{ 
                count: state.count + 1

            }

        case DECREMENT_COUNTER:
            return{
                count: state.count - 1
            }
      

        default:
            return state;
    }
}