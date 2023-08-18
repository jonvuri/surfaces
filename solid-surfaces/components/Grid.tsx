import { ParentComponent } from 'solid-js'

import styles from '../../common/grid.module.sass'

const Grid: ParentComponent = ({ children }) => (
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

export default Grid
