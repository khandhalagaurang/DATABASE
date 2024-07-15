import { useState } from 'react'
import './App.css'
import GoogleAuth from './GoogleAuth'
import SinUpauth from './SinUpauth'
import Sinin_Auth from './Sinin_Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <GoogleAuth/> */}
    <SinUpauth/>
    <Sinin_Auth/>
    </>
  )
}

export default App
