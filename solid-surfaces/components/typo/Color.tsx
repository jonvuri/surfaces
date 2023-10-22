import { ParentComponent } from 'solid-js'

import styles from '../../../common/typo.module.sass'

export const Shimmer: ParentComponent = (props) => (
  <div class={styles['shimmer']}>{props.children}</div>
)

export const Dimmed: ParentComponent = (props) => (
  <div class={styles['dimmed']}>{props.children}</div>
)
