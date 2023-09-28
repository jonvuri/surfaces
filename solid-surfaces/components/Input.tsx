import { JSX, Component } from 'solid-js'

import styles from '../../common/input.module.sass'

type InputProps = {
  primary?: boolean
  label?: string
} & JSX.InputHTMLAttributes<HTMLInputElement>

const Input: Component<InputProps> = (props) => {
  const ref = props.ref || (() => {})
  return props.label ? (
    <label>
      <span class={styles.label}>{props.label}</span>
      <input
        ref={ref}
        classList={{ [styles.input]: true, [styles.primary]: props.primary }}
        {...props}
      />
    </label>
  ) : (
    <input
      ref={ref}
      classList={{ [styles.input]: true, [styles.primary]: props.primary }}
      {...props}
    />
  )
}

export default Input
