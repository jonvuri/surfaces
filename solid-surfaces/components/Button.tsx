import { JSX, ParentComponent, Ref } from 'solid-js'

import styles from '../../common/button.module.sass'

type ButtonProps = {
  primary?: boolean
  ref?: Ref<HTMLButtonElement>
} & JSX.HTMLAttributes<HTMLButtonElement>

const Button: ParentComponent<ButtonProps> = ({ primary, children, ref, ...props }) => (
  <button ref={ref} classList={{ [styles.button]: true, [styles.primary]: primary }} {...props}>
    {children}
  </button>
)

export default Button
