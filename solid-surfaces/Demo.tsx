import { Component, createSignal } from 'solid-js'

import styles from '../common/button.module.sass'

const Demo: Component = () => {
  const [count, setCount] = createSignal(0)
  // setInterval(setCounter, 1000, (c: number) => c + 1)

  return (
    <>
      <header>
        <h1>Good Morning solid-surfaces</h1>
      </header>
      <button class={styles['pink-button']} onClick={() => setCount((count) => count + 1)}>
        count is: {count()}
      </button>
    </>
  )
}

export default Demo
