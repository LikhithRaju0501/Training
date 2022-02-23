import { combineReducers } from "redux";

const initialState=[
    {}
]
export const calorieReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_ENTRY':
            return state;
        case 'DELETE_ENTRY':
            return state;
        default:
            return state
    }
}

export const rootReducer=combineReducers({
    calorie:calorieReducer
})