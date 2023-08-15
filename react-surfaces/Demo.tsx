import { useState } from 'react'

import Button from './components/Button'
import Grid from './components/Grid'

import '../common/global.scss'
import styles from './demo.module.sass'

const Demo = () => {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.main}>
      <header>
        <h1></h1>
      </header>
      <Grid>
        <div style={{ backgroundColor: '#a0f' }}>Good Morning react-surfaces</div>
        <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
      </Grid>
    </main>
  )
}

export default Demo
