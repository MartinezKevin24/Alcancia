import {INSERT_COIN, RESET_PIGGY} from "./actions";

const initialState = {
    "50": 0,
    "100": 0,
    "200": 0,
    "500": 0,
    "1000": 0
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case INSERT_COIN:
            let sum = state[Object.entries(action.payload)[0][0]] + Object.entries(action.payload)[0][1];
            return{
                ...state,
                [Object.entries(action.payload)[0][0]]: sum
            }
        case RESET_PIGGY:
            return {
                ...state,
                "50": 0,
                "100": 0,
                "200": 0,
                "500": 0,
                "1000": 0
            }
        default: return state;
    }
}

export default reducer;