import { Component, For, JSX, Ref } from 'solid-js'

import styles from '../../common/table.module.sass'

type ColumnSpec = {
  key: string
  name: string
}

type ColumnData = string | number | boolean | null | undefined

type Row = Record<string, ColumnData> & { id: string }

type TableProps = {
  columns: ColumnSpec[]
  data: Row[]
  ref?: Ref<HTMLTableElement>
} & JSX.HTMLAttributes<HTMLTableElement>

const Table: Component<TableProps> = ({ columns, data, ref, ...props }) => (
  <table ref={ref} class={styles['table']} {...props}>
    <thead>
      <tr>
        <For each={columns}>{({ name }) => <th>{name}</th>}</For>
      </tr>
    </thead>
    <tbody>
      <For each={data}>
        {(row) => (
          <tr>
            <For each={columns}>{({ key }) => <td>{row[key]}</td>}</For>
          </tr>
        )}
      </For>
    </tbody>
  </table>
)

export default Table
