
import { useState } from 'react';
import './App.css'

function App() {
  
  let [count, setCount] = useState(0);  // default value 0 , it can take string, object , array etc.

  const increment = () => {

    
    if(count < 20){
      count = count +1; 
      setCount(count);
    }
    
    console.log('clicked', count);
  }

  const decrement = () => {
    
    
    if(count > 0){
      count = count -1;
      setCount(count);
    }
    
    console.log('clicked', count);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Print the counter value : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Footer: count value :{count}</p>
    </>
  )
}

export default App
