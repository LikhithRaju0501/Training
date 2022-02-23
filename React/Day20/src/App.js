import Navbar from "./components/Navbar";
import React, {useState} from 'react'
import Counter from "./components/Counter";
import CardComp from "./components/CardComp";
// import './App.css'
import Tweets from "./components/Twitter/Tweets";
import ApiHandle from "./components/ApiHandle";
import FormComp from "./components/FormComp";
import ContactForm from "./components/Contacts/ContactForm";
import ContextApi from "./contextApi/ContextApi";
import Reducer from './Reducer/Reducer'
import Redux from "./components/Redux/Redux";
import ApiHandler from "./components/API/ApiHandler";

function App() {
  const arr=[1,2,3,4,5,6,7];
  // const [count, setCount] = useState({
  //   countOne:0,
  //   countTwo:6
  // })
  // const handleClick =()=>{
  //   setCount({...count,countOne:count.countOne+1})
  // }
  // const handleClickOne=()=>{
  //   setCount({...count,countTwo:count.countTwo+1})
  // }
  return (
    <div>
      {/* <Navbar arr={arr} /> */}
     {/* {arr.map((item,index)=>{
      return (
        <h1 className={item%2==0?'text-warning':'text-success'} key={index}>{item}</h1>
      )
    })} */}
    {/* <h1>{count.countOne}</h1>
    <h1>{count.countTwo}</h1>
    <button onClick={handleClick}>Increment one</button>
    <button onClick={handleClickOne}>Increment two</button> */}
    {/* <Counter /> */}
    {/* <div className="cardContainer">
    <CardComp title='Todays Money' number='$53,000' per='+55%' pos={1} logo='fas fa-dollar-sign' />
    <CardComp title='Todays Users' number='2,300' per='+3%' pos={1}  logo='fas fa-globe-asia' />
    <CardComp title='New Clients' number='+3,462'per='-2%' pos={2}  logo='fas fa-trophy'  />
    <CardComp title='Sales' number='$103,430' per='+5%' pos={1}  logo='fas fa-shopping-cart' />
    </div> */}
    {/* <Tweets /> */}
    {/* <ApiHandle /> */}
    {/* <FormComp /> */}
    {/* <ContactForm /> */}
    {/* <ContextApi /> */}
    {/* <Reducer /> */}
    {/* <Redux /> */}
    <ApiHandler />
    </div>
  );
}

export default App;
