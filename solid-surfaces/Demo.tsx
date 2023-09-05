import { Component, createSignal } from 'solid-js'
import 'surface-fonts'

import '../common/global.sass'

import Button from './components/Button'
import { LayoutGrid, Grid } from './components/Grid'
import Input from './components/Input'
import Table from './components/Table'
import Boxed from './components/stellation/Boxed'
import { Dimmed } from './components/typo/Color'
import { Header, Subheader, ContrastHeader, GutterHeader } from './components/typo/Header'

import styles from './demo.module.sass'
import Tagged from './components/stellation/Tagged'

const Divider = () => (
  <Grid full>
    <br />
    <hr />
    <br />
  </Grid>
)

const Spacer = () => <div style={{ height: '1rem' }} />

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

        <Divider />

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

        <Divider />

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

        <Divider />

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

        <Divider />

        <Grid full>
          <Subheader>
            <Dimmed>Stellations</Dimmed>
          </Subheader>
        </Grid>
        <Grid full subgrid background>
          <Grid full>
            <Boxed>Boxed</Boxed>
          </Grid>

          <Spacer />

          <Grid full>
            <Boxed emphasis>Boxed - emphasis</Boxed>
          </Grid>

          <Spacer />

          <Grid full>
            <Boxed accent>Boxed - accent</Boxed>
          </Grid>

          <Spacer />

          <Grid full>
            <Boxed half>Half boxed</Boxed>
          </Grid>

          <Spacer />

          <Grid full>
            <Boxed half inverted>
              Half boxed inverted
            </Boxed>
          </Grid>

          <Spacer />

          <Grid full>
            <Tagged>Tagged</Tagged>
          </Grid>

          <Spacer />

          <Grid full>
            <Tagged bottom>Tagged - bottom</Tagged>
          </Grid>
        </Grid>

        <div style={{ height: '3rem' }} />
      </LayoutGrid>
    </main>
  )
}

export default Demo
