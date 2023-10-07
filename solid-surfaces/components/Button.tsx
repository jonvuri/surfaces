import { JSX, ParentComponent } from 'solid-js'

import styles from '../../common/button.module.sass'

type ButtonProps = {
  primary?: boolean
} & JSX.HTMLAttributes<HTMLButtonElement>

const Button: ParentComponent<ButtonProps> = (props) => (
  <button
    {...props}
    classList={{ [styles.button]: true, [styles.primary]: props.primary, ...props.classList }}
  >
    {props.children}
  </button>
)

export default Button
