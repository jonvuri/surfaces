import { Index, JSX, ParentComponent } from 'solid-js'

import styles from '../../common/grid.module.sass'

type GridItemProps = {
  sm?: 1 | 2 | 3 | 4
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
  background?: boolean
  full?: boolean
  subgrid?: boolean
} & JSX.HTMLAttributes<HTMLDivElement>

export const Grid: ParentComponent<GridItemProps> = ({
  sm,
  md,
  lg,
  background = false,
  full = false,
  subgrid = false,
  children,
  ...props
}) => (
  <div
    classList={
      full
        ? {
            [styles[`sm-span-4`]]: true,
            [styles[`md-span-8`]]: true,
            [styles[`lg-span-16`]]: true,
          }
        : {
            ...(sm && { [styles[`sm-span-${sm}`]]: true }),
            ...(md && { [styles[`sm-span-${md}`]]: true }),
            ...(lg && { [styles[`sm-span-${lg}`]]: true }),
          }
    }
    style={{
      ...(subgrid && {
        display: 'grid',
        position: 'relative',
        'grid-template-columns': 'subgrid',
      }),
    }}
    {...props}
  >
    {background && (
      <div class={styles.background_grid}>
        <Index each={new Array(full ? 4 : sm || 0)}>
          {() => <div class={styles.background_grid_filler_column_sm} />}
        </Index>
        <Index each={new Array(full ? 4 : Math.min(0, (md || 0) - (sm || 0)))}>
          {() => <div class={styles.background_grid_filler_column_md} />}
        </Index>
        <Index each={new Array(full ? 8 : Math.min(0, (lg || 0) - (md || 0) - (sm || 0)))}>
          {() => <div class={styles.background_grid_filler_column_lg} />}
        </Index>
      </div>
    )}
    {children}
  </div>
)

type GridProps = {
  columns?: number
}

/**
 * Responsive grid used for page layout at the top level.
 * This grid should not be nested. Instead, use the `Grid` component
 * for all nested grids. Any `Grid` nested in the `LayoutGrid` will
 * be a subgrid and automatically align to the `LayoutGrid`'s columns.
 */
export const LayoutGrid: ParentComponent<GridProps> = ({ children }) => (
  <div class={styles.container}>
    <div class={styles['layout-grid']}>{children}</div>
  </div>
)
