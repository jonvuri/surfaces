import { Component, For, JSX } from 'solid-js'

import Boxed from './stellation/Boxed'

import styles from '../../common/table.module.sass'

type ColumnSpec = {
  key: string
  name: string
}

type ColumnData = string | number | boolean | null | undefined

type Row = Record<string, ColumnData>

type TableProps = {
  columns: ColumnSpec[]
  data: Row[]
  header?: boolean
} & JSX.HTMLAttributes<HTMLTableElement>

const Table: Component<TableProps> = (props) => (
  <table class={styles['table']} {...props}>
    {(props.header ?? true) && (
      <thead>
        <tr>
          <For each={props.columns}>{(column) => <th>{column.name}</th>}</For>
        </tr>
      </thead>
    )}
    <tbody>
      <For each={props.data}>
        {(row) => (
          <tr>
            <For each={props.columns}>
              {(column) => (
                <td>
                  <Boxed>{row[column.key]}</Boxed>
                </td>
              )}
            </For>
          </tr>
        )}
      </For>
    </tbody>
  </table>
)

export default Table
