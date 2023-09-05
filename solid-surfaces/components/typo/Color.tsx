import { ParentComponent } from 'solid-js'

import styles from '../../../common/typo.module.sass'

export const Dimmed: ParentComponent = ({ children }) => (
  <div class={styles['dimmed']}>{children}</div>
)
