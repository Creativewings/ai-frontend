import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "./components/ui/Button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is my Application</h1>
      <Button variant={"ghost"}>Click me</Button>
      
      
    </>
  )
}

export default App
