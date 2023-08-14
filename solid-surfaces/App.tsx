import './App.scss'
import '../common/button.sass'

import { Component, createSignal } from 'solid-js'

const App: Component = () => {
  const [counter, setCounter] = createSignal(0)
  setInterval(setCounter, 1000, (c: number) => c + 1)

  return (
    <>
      <div>
        <h1 class="header">{counter()}</h1>
      </div>
      <h1>Hello world!</h1>
      <button class="pink-button">Good Morning</button>
    </>
  )
}

export default App
