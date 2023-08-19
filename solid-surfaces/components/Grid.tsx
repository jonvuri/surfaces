import { JSX, ParentComponent } from 'solid-js'

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
  <div style={{ 'grid-column': `span ${columns}`, 'grid-row': `span ${rows}` }} {...props}>
    {children}
  </div>
)

export const Grid: ParentComponent = ({ children }) => (
  <div class={styles.container}>
    <div class={styles.background_grid}>
      <div class={styles.background_grid_filler_column} />
      <div class={styles.background_grid_filler_column} />
      <div class={styles.background_grid_filler_column} />
      <div class={styles.background_grid_filler_column} />
      <div class={styles.background_grid_filler_column} />
      <div class={styles.background_grid_filler_column} />
      <div class={styles.background_grid_filler_column} />
      <div class={styles.background_grid_filler_column} />
    </div>
    <div class={styles.grid}>{children}</div>
  </div>
)
