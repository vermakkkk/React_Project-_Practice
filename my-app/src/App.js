import React, {useState} from 'react';
import './App.css';
function App() {
const [count,setCount]=useState(0)
 
function Increment (){
   setCount(count+1)
  }
  function Decrement (){
    if(count>0){
      setCount(count-1)
    }

  }
  return (
   <div className="outerSection">
     
        <div className="Counter">
        <h1>Counter App</h1>
        <h1 style={{fontSize:80}}>{count}</h1>
       <div className="btn">
       <button onClick={Increment}>+</button>
       <button onClick={Decrement}>-</button> </div>      
       
        </div>
    </div>
  );
}

export default App;
