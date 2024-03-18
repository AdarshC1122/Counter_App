import { useState } from 'react'
import './App.css'
import CounterMain from './components/CounterMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      <CounterMain/>
    </>
  )
}

export default App
