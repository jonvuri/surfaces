import { useState } from 'react'
import 'surface-fonts'

import Button from './components/Button'
import { Grid, GridItem } from './components/Grid'

import '../common/global.scss'
import styles from './demo.module.sass'

const Demo = () => {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.main}>
      <Grid>
        <GridItem className={styles['good-morning']} columns={2}>
          Good Morning react-surfaces
        </GridItem>
        <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
      </Grid>
    </main>
  )
}

export default Demo
