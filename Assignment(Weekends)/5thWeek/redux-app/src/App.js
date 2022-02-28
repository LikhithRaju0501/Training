import logo from './logo.svg';
import './App.css';
import {rootReducer} from './components/Reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TotalCalorie from './components/TotalCalorie';
import AddEntry from './components/AddEntry';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entries from './components/Entries';


const store=createStore(rootReducer)

function App() {
  return (
    <div className="App">
    <Provider  store={store}>
    <TotalCalorie /> <br /><br />
    <AddEntry /> <br /> <br />
    <Entries />
    </Provider>
    </div>
  );
}

export default App;
