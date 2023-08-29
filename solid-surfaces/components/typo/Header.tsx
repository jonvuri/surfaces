import { ParentComponent } from 'solid-js'

import styles from '../../../common/typo.module.sass'

export const Header: ParentComponent = ({ children }) => (
  <h1 class={styles.header}>{children}</h1>
)

export const Subheader: ParentComponent = ({ children }) => (
  <h2 class={styles.subheader}>{children}</h2>
)

export const ContrastHeader: ParentComponent = ({ children }) => (
  <h3 class={styles['contrast-header']}>{children}</h3>
)

export const GutterHeader: ParentComponent = ({ children }) => (
  <h4 class={styles['gutter-header']}>{children}</h4>
)
