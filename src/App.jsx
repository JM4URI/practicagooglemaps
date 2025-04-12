import { useState } from 'react'
import './App.css'
import Mapa from './components/Mapa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Mapa con Google Maps</h1>
        <Mapa />
      </div>
    </>
  )
}

export default App
