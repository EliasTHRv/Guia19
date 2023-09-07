import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cantidad de veces que te daria contra el ropero!!! {count}
        </button>
        

      </div>
      
    </>
  )
}

export default App
