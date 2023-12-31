import { Index, JSX, ParentComponent } from 'solid-js'

import styles from '../../common/grid.module.sass'

type GridItemProps = {
  sm?: 1 | 2 | 3 | 4
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
  background?: boolean
  full?: boolean
  subgrid?: boolean
  row_template?: string
} & JSX.HTMLAttributes<HTMLDivElement>

export const Grid: ParentComponent<GridItemProps> = (props) => (
  <div
    {...props}
    classList={{
      ...(props.full
        ? {
            [styles[`sm-span-4`]]: true,
            [styles[`md-span-8`]]: true,
            [styles[`lg-span-16`]]: true,
          }
        : {
            ...(props.sm && { [styles[`sm-span-${props.sm}`]]: true }),
            ...(props.md && { [styles[`sm-span-${props.md}`]]: true }),
            ...(props.lg && { [styles[`sm-span-${props.lg}`]]: true }),
          }),
      ...props.classList,
    }}
    style={{
      ...(props.subgrid && {
        display: 'grid',
        position: 'relative',
        'grid-template-columns': 'subgrid',
      }),
      ...(props.row_template && { 'grid-template-rows': props.row_template }),
      ...(typeof props.style === 'object' && props.style),
    }}
  >
    {props.background && (
      <div class={styles.background_grid}>
        <Index each={new Array(props.full ? 4 : props.sm || 0)}>
          {() => <div class={styles.background_grid_filler_column_sm} />}
        </Index>
        <Index
          each={new Array(props.full ? 4 : Math.min(0, (props.md || 0) - (props.sm || 0)))}
        >
          {() => <div class={styles.background_grid_filler_column_md} />}
        </Index>
        <Index
          each={
            new Array(
              props.full ? 8 : Math.min(0, (props.lg || 0) - (props.md || 0) - (props.sm || 0)),
            )
          }
        >
          {() => <div class={styles.background_grid_filler_column_lg} />}
        </Index>
      </div>
    )}
    {props.children}
  </div>
)

type LayoutGridProps = {
  columns?: number
  row_template?: string
  containerClassList?: Record<string, boolean>
  gridClassList?: Record<string, boolean>
}

/**
 * Responsive grid used for page layout at the top level.
 * This grid should not be nested. Instead, use the `Grid` component
 * for all nested grids. Any `Grid` nested in the `LayoutGrid` will
 * be a subgrid and automatically align to the `LayoutGrid`'s columns.
 */
export const LayoutGrid: ParentComponent<LayoutGridProps> = (props) => (
  <div classList={{ [styles.container]: true, ...props.containerClassList }}>
    <div
      classList={{ [styles['layout-grid']]: true, ...props.gridClassList }}
      style={props.row_template ? { 'grid-template-rows': props.row_template } : undefined}
    >
      {props.children}
    </div>
  </div>
)
