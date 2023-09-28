import { ParentComponent } from 'solid-js'

import styles from '../../../common/typo.module.sass'

export const Dimmed: ParentComponent = (props) => (
  <div class={styles['dimmed']}>{props.children}</div>
)
