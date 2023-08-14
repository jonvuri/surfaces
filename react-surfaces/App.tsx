import React from 'react'
import { useState } from 'react'

import '../common/button.sass'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite + React</h1>
      </header>
      <button className="pink-button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </div>
  )
}

export default App
