import { useState } from 'react'
import './App.css'



function App() {
  const [message,setMessage ] = useState('')
  let [counter, setCount] = useState(0);
const addValue = () =>{
  setCount( counter += 1)
  if (!counter == 0) {
    setMessage('')
  }
  console.log(counter);
  // console.log(counter);
}
const removeValue = () =>{
console.log(counter);
  if (counter == 0) {
    setMessage('You Can Not Go Below Zero')
    setCount(counter = 0)
  }
  else{
    setCount(counter-1)
  }
}
const resetValue = () =>{
  setCount(counter = 0)
}
  return (
    <>
    <h1>React Counter</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={addValue}>Add value</button>{" "}
    <button onClick={removeValue}>remove value</button>{" "}
    <button onClick={resetValue}>reset</button>
    <p>footer:{counter}</p>
    <p className='message'>{message}</p>
    </>
  )
}

export default App
