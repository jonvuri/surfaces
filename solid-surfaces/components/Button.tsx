import { JSX, ParentComponent } from 'solid-js'

import styles from '../../common/button.module.sass'

type ButtonProps = {
  primary?: boolean
} & JSX.HTMLAttributes<HTMLButtonElement>

const Button: ParentComponent<ButtonProps> = (props) => (
  <button classList={{ [styles.button]: true, [styles.primary]: props.primary }} {...props}>
    {props.children}
  </button>
)

export default Button
