import { ParentComponent } from 'solid-js'

import styles from '../../../common/typo.module.sass'

export const Header: ParentComponent = (props) => (
  <h1 class={styles.header}>{props.children}</h1>
)

export const Subheader: ParentComponent = (props) => (
  <h2 class={styles.subheader}>{props.children}</h2>
)

export const ContrastHeader: ParentComponent = (props) => (
  <h3 class={styles['contrast-header']}>{props.children}</h3>
)

export const GutterHeader: ParentComponent = (props) => (
  <h4 class={styles['gutter-header']}>{props.children}</h4>
)
