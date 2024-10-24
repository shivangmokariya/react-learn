import { useCallback, useState } from 'react';
import './App.css';
import ChildComponents from './components/ChildComponents';

function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(()=>{
    setCount(prevCount => prevCount + 1);
  },[])

  return (
    <div>
      <div>
        Count: {count}
      </div>
      <button onClick={handleClick}>Increment</button>
      <div>
        <ChildComponents buttonName="Click me" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
