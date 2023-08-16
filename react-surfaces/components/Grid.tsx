import styles from '../../common/grid.module.sass'

// type GridProps = React.PropsWithChildren<{}>
type GridProps = {
  children: React.ReactNode | undefined
}

const Grid = ({ children }: GridProps) => (
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

export default Grid
