import { Component, createSignal } from 'solid-js'
import 'surface-fonts'

import '../common/global.sass'

import Button from './components/Button'
import { LayoutGrid, Grid } from './components/Grid'
import Input from './components/Input'
import Table from './components/Table'
import { Dimmed } from './components/typo/Color'
import { Header, Subheader, ContrastHeader, GutterHeader } from './components/typo/Header'

import styles from './demo.module.sass'

const Demo: Component = () => {
  const [count, setCount] = createSignal(0)

  return (
    <main class={styles.main}>
      <Header>solid-surfaces demo</Header>
      <Subheader>
        <Dimmed>Layout grid [Around page]</Dimmed>
      </Subheader>
      <LayoutGrid>
        <Grid full>
          <Subheader>
            <Dimmed>Typography</Dimmed>
          </Subheader>
        </Grid>
        <Grid full subgrid background>
          <Grid full>
            <Header>Header</Header>
          </Grid>
          <Grid full>
            <Subheader>Subheader</Subheader>
          </Grid>
          <Grid full>
            <GutterHeader>Gutter Header</GutterHeader>
          </Grid>
          <Grid full>
            <ContrastHeader>Contrast Header</ContrastHeader>
          </Grid>
        </Grid>

        <Grid full>
          <br />
          <hr />
          <br />
        </Grid>

        <Grid full>
          <Subheader>
            <Dimmed>Button</Dimmed>
          </Subheader>
        </Grid>
        <Grid full subgrid background>
          <Grid full>
            <Button onClick={() => setCount((count) => count + 1)}>count is: {count()}</Button>
          </Grid>
        </Grid>

        <Grid full>
          <br />
          <hr />
          <br />
        </Grid>

        <Grid full>
          <Subheader>
            <Dimmed>Input</Dimmed>
          </Subheader>
        </Grid>
        <Grid full subgrid background>
          <Grid full>
            <Input />
          </Grid>
        </Grid>

        <Grid full>
          <br />
          <hr />
          <br />
        </Grid>

        <Grid full>
          <Subheader>
            <Dimmed>Table</Dimmed>
          </Subheader>
        </Grid>
        <Grid full subgrid background>
          <Table
            columns={[
              { key: 'id', name: 'ID' },
              { key: 'value', name: 'Value' },
              { key: 'text', name: 'Text' },
            ]}
            data={[
              {
                id: 'LRM88WMB3RF',
                value: 3,
                text: 'eleifend vitae, erat. Vivamus nisi. Mauris',
              },
              {
                id: 'RVS14KSU8BO',
                value: 17,
                text: 'viverra. Donec tempus, lorem fringilla ornare',
              },
              {
                id: 'JGI05COT1UL',
                value: 11,
                text: 'semper rutrum. Fusce dolor quam, elementum',
              },
            ]}
          />
        </Grid>
      </LayoutGrid>
    </main>
  )
}

export default Demo
