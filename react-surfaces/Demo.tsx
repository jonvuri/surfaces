import { useState } from 'react'
import 'surface-fonts'

import Button from './components/Button'
import Input from './components/Input'
import { Grid, GridItem } from './components/Grid'
import Table from './components/Table'

import '../common/global.sass'
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
        <Input />
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
