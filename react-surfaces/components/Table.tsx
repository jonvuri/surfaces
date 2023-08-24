import React from 'react'

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
} & React.HTMLAttributes<HTMLTableElement>

const Table: React.FC<TableProps> = React.forwardRef<HTMLTableElement, TableProps>(
  ({ columns, data, ...props }, ref) => (
    <table ref={ref} className={styles['table']} {...props}>
      <thead>
        <tr>
          {columns.map(({ key, name }) => (
            <th key={key}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map(({ key }) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
)

export default Table
