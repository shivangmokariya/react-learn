import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieSearch from './components/MovieComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 >hello APIs</h1>
      <MovieSearch/>
    </>
  )
}

export default App
