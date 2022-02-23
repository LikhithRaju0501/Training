import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import App from './App';
import { calorieReducer, rootReducer } from './components/Redux/reducers/Reducer';
import { Provider } from 'react-redux'



const store = createStore(rootReducer)
const Greet = () => {
  // console.log(store.getState());
  return (
    <div>
      <Provider store={store}><App /></Provider>
      {/* <Provider store={store}><App /></Provider> */}
</div>
  )
  
}

ReactDOM.render(<Greet/>, document.getElementById('root'))