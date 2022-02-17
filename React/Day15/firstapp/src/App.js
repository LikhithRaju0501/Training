import './App.css';
import ImageComp from './components/ImageComp';
import TextComp from './components/TextComp';
import LogoComp from './components/LogoComp';


function App() {
  return (
   <div  className='whole'>
     <LogoComp />  
   <ImageComp />
   <TextComp/> 
   </div>
  );
}

export default App;
