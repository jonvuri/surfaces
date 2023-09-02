import { Index, JSX, ParentComponent } from 'solid-js'

import styles from '../../common/grid.module.sass'

type GridItemProps = {
  rows?: number
  columns?: number
} & JSX.HTMLAttributes<HTMLDivElement>

export const GridItem: ParentComponent<GridItemProps> = ({
  rows = 1,
  columns = 1,
  children,
  ...props
}) => (
  <div
    style={{
      'grid-column': columns === 0 ? '1 / -1' : `span ${columns}`,
      'grid-row': rows === 0 ? '1 / -1' : `span ${rows}`,
    }}
    {...props}
  >
    {children}
  </div>
)

type GridProps = {
  columns?: number
}

export const Grid: ParentComponent<GridProps> = ({ columns = 2, children }) => (
  <div class={styles.container}>
    <div class={styles.background_grid}>
      <Index each={new Array(columns)}>
        {() => <div class={styles.background_grid_filler_column} />}
      </Index>
    </div>
    <div class={styles.grid}>{children}</div>
  </div>
)

export const LayoutGrid: ParentComponent<GridProps> = ({ children }) => (
  <div class={styles.container}>
    <div class={styles.background_grid}>
      <Index each={new Array(12)}>
        {() => <div class={styles.background_grid_filler_column} />}
      </Index>
    </div>
    <div class={styles.grid}>{children}</div>
  </div>
)
