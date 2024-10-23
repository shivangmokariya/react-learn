import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('olive'); // Default background color

  const bgChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
      <ul>
        <li><button onClick={() => bgChange('red')}>Red</button></li>
        <li><button onClick={() => bgChange('yellow')}>Yellow</button></li>
        <li><button onClick={() => bgChange('white')}>White</button></li>
        <li><button onClick={() => bgChange('black')}>Black</button></li>
        <li><button onClick={() => bgChange('blue')}>Blue</button></li>
        <li><button onClick={() => bgChange('green')}>Green</button></li>
      </ul>
    </div>
  );
}

export default App;