import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import App from './App';
import { rootReducer } from './components/Redux/reducers/Reducer';



const store = createStore(rootReducer)
const Greet = () => {
  return (
    <div>
      <App />
    

</div>
  )
  
}

ReactDOM.render(<Greet/>, document.getElementById('root'))