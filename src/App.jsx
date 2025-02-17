import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccordionsList from './components/AccordionsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button type="button" className="btn btn-primary">html </button>
      <button type="button" className="btn btn-secondary">css</button>
      <button type="button" className="btn btn-success">Javascript</button>
      <button type="button" className="btn btn-danger">Node.js</button>
      <button type="button" className="btn btn-warning">Reactjs</button>
      <button type="button" className="btn btn-info">express</button>

      <AccordionsList />
    </>
  )
}

export default App
