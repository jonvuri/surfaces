import { Component, createSignal } from 'solid-js'
import 'surface-fonts'

import '../common/global.sass'

import Button from './components/Button'
import { Grid, GridItem } from './components/Grid'
import Table from './components/Table'

import styles from './demo.module.sass'

const Demo: Component = () => {
  const [count, setCount] = createSignal(0)

  return (
    <main class={styles.main}>
      <Grid>
        <GridItem class={styles['good-morning']} columns={2}>
          Good Morning solid-surfaces
        </GridItem>
        <Button onClick={() => setCount((count) => count + 1)}>count is: {count()}</Button>
        <Table
          columns={[
            { key: 'name', name: 'Name' },
            { key: 'age', name: 'Age' },
          ]}
          data={[
            { id: 'john', name: 'John', age: 42 },
            { id: 'jane', name: 'Jane', age: 21 },
          ]}
        />
      </Grid>
    </main>
  )
}

export default Demo
