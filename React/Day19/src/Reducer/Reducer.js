import React from 'react'
import Banking from './Banking'
import {BankingProvider} from './banking-context'

const Reducer = () => {
  return (
    <BankingProvider>
        <Banking />
    </BankingProvider>
  )
}

export default Reducer

// const [state, dispatch] = useReducer(reducer, initialState)

// <button onClick={dispatch({type:'INCREMENT'})}></button>

// const reducer=(state,action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state
//   }
// }