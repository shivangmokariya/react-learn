import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset,incrementByAmount } from './features/counter/counterSlice'

function App() {
  const [amount,setAmount]=useState(0);
  const count = useSelector((state)=> {
   return state.counter .value});

  const dispatch = useDispatch();

  
  function handleIncrementClick(){
    dispatch(increment())
  }
  
  function handleDecrementClick(){
    dispatch(decrement())
  }

  function handleResetClick(){
    dispatch(reset())
  }

  function handleIncByClick(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <>
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br/>
      <br/>
      <button onClick={handleResetClick}> Reset </button>
      <input 
      type='number'
      value={amount}
      placeholder='Enter amount'
      onChange={(e)=>{setAmount(e.target.value)}}/>
      <button onClick={handleIncByClick}>increment By Number</button>
    </div>
    </>
  )
}

export default App
