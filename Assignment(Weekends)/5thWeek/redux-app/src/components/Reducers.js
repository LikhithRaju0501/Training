import { combineReducers } from "redux";

const initState=[
]

export const calorieReducer=(state=initState,action)=>{
    switch(action.type){
        case 'ADD_ENTRY':
            let temp
            if(state.length==0)temp={id:1,item:action.item, cal:parseInt(action.cal)}
            else {
                const lastIndex = state[state.length-1].id
                console.log(lastIndex);
                temp={id:lastIndex+1,item:action.item, cal:parseInt(action.cal)}
            }
            return state=[...state,temp];
        case 'DELETE_ENTRY':
            console.log(action.id);
            const tempDel = state.filter((item)=>item.id != action.id)
            return state=tempDel;
        default:
            return state
    }
}

export const rootReducer=combineReducers({
    calorie:calorieReducer
})