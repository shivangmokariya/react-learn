import { useState } from "react";
function App() {
  let [counter,setCounter]= useState(15)
  // let counter = 5;
  const addValue = () =>{
    if(counter >=20){
      return counter;
    }else{
    counter = counter + 1;
    setCounter(counter) 
    }

  }
  const removeCounter = () =>{
    if(counter <= 0){
      return counter
    }else{
      counter = counter - 1;
      setCounter(counter)
    }

  }
  return (
    <>
    <h1>shivang mokariya</h1>
    <h2>Counter value :{counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeCounter}>Remove value : {counter}</button>
    </>
  )
}

export default App
