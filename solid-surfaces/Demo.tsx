import { Component, createSignal } from 'solid-js'

import Button from './components/Button'
import Grid from './components/Grid'

import '../common/global.scss'
import styles from './demo.module.sass'

const Demo: Component = () => {
  const [count, setCount] = createSignal(0)

  return (
    <main class={styles.main}>
      <Grid>
        <div style={{ ['background-color']: '#a0f' }}>Good Morning solid-surfaces</div>
        <Button onClick={() => setCount((count) => count + 1)}>count is: {count()}</Button>
      </Grid>
    </main>
  )
}

export default Demo
