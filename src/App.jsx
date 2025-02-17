import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccordionsList from './components/AccordionsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button type="button" className="btn  m-3">html </button>
      <button type="button" className="btn  m-3">css</button>
      <button type="button" className="btn  m-3">Javascript</button>
      <button type="button" className="btn m-3">Node.js</button>
      <button type="button" className="btn m-3">Reactjs</button>
      <button type="button" className="btn m-3">express</button>

      <AccordionsList />
    </>
  )
}

export default App
