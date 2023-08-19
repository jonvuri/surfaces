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
  <div style={{ ...style, gridColumn: `span ${columns}`, gridRow: `span ${rows}` }} {...props}>
    {children}
  </div>
)

type GridProps = {
  children: React.ReactNode | undefined
}

export const Grid: React.FC<GridProps> = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.background_grid}>
      <div className={styles.background_grid_filler_column} />
      <div className={styles.background_grid_filler_column} />
      <div className={styles.background_grid_filler_column} />
      <div className={styles.background_grid_filler_column} />
      <div className={styles.background_grid_filler_column} />
      <div className={styles.background_grid_filler_column} />
      <div className={styles.background_grid_filler_column} />
      <div className={styles.background_grid_filler_column} />
    </div>
    <div className={styles.grid}>{children}</div>
  </div>
)
