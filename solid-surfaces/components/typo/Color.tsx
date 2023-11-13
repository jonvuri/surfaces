import { ParentComponent, JSX } from 'solid-js'

import styles from '../../../common/typo.module.sass'

export const Shimmer: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} classList={{ [styles['shimmer']]: true, ...props.classList }}>
    {props.children}
  </div>
)

export const Dimmed: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} classList={{ [styles['dimmed']]: true, ...props.classList }}>
    {props.children}
  </div>
)
