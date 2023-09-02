import React from 'react'

import styles from '../../common/grid.module.sass'

type GridItemProps = {
  rows?: number
  columns?: number
} & React.HTMLAttributes<HTMLDivElement>

export const GridItem: React.FC<GridItemProps> = ({
  rows = 1,
  columns = 1,
  children,
  style,
  ...props
}) => (
  <div
    style={{
      ...style,
      gridColumn: columns === 0 ? '1 / -1' : `span ${columns}`,
      gridRow: rows === 0 ? '1 / -1' : `span ${rows}`,
    }}
    {...props}
  >
    {children}
  </div>
)

type GridProps = {
  columns?: number
  children: React.ReactNode | undefined
}

// Todo: Apply columns to grid css
export const Grid: React.FC<GridProps> = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.grid}>{children}</div>
  </div>
)

type LayoutGridProps = {
  children: React.ReactNode | undefined
}

// Todo: 2-col/8-col transition with background columns
export const LayoutGrid: React.FC<LayoutGridProps> = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.background_grid}>
      {new Array(8).map(() => (
        <div className={styles.background_grid_filler_column} />
      ))}
    </div>
    <div className={styles.grid}>{children}</div>
  </div>
)
