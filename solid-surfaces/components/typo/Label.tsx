import { ParentComponent, JSX } from 'solid-js'

import styles from '../../../common/typo.module.sass'

export const Label: ParentComponent<JSX.HTMLAttributes<HTMLLabelElement>> = (props) => (
  <label {...props} classList={{ [styles['label']]: true, ...props.classList }}>
    {props.children}
  </label>
)
