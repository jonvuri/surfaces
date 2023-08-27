import { JSX, Component, Ref } from 'solid-js'

import styles from '../../common/input.module.sass'

type InputProps = {
  primary?: boolean
  ref?: Ref<HTMLInputElement>
} & JSX.HTMLAttributes<HTMLInputElement>

const Input: Component<InputProps> = ({ primary, ref, ...props }) => (
  <input ref={ref} classList={{ [styles.input]: true, [styles.primary]: primary }} {...props} />
)

export default Input
