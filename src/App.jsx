import Calendar from './components/calender'
import Home from './components/home'
import Navbar from './components/navbar'
import { useRef } from 'react';
import './App.css'
function App() {
  
  const goRef= useRef(null);


  const goTo=()=>{
     goRef.current.scrollIntoView({behavior : "smooth"});
  };
  return (
  
     <div> 
     <Navbar/>
    <section id="home"><Home onScroll={goTo} /></section>
    <section  id="calender"><Calendar/></section>
    </div>      
  
  );
}

export default App