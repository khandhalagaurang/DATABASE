import { useState } from 'react'
import './App.css'
import RealtimeDB from './RealtimeDB'
import FireStore from './FireStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RealtimeDB/> */}
      <FireStore/>
    </>
  )
}

export default App
