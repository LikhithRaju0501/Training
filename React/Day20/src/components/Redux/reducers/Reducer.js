import { combineReducers } from "redux";

const initialState=[]
export const calorieReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_ENTRY':
            let lastEl = state.length
            if(state.length !=0)return [...state,{...action.entry,id:lastEl+1}];
            else return [...state,{...action.entry,id:1}];
            // return [...state,{item:action.entry.item,calorie:action.entry.calorie}];
            // return [...state,{...action.entry}];
        case 'DELETE_ENTRY':
            // const arr = state.filter((item)=>item.id!=action.id)
            return state.filter((item)=>item.id != action.id);
        default:
            return state
    }
}

export const rootReducer=combineReducers({
    calorie:calorieReducer
})