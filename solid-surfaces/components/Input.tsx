import { JSX, Component, Ref } from 'solid-js'

import styles from '../../common/input.module.sass'

type InputProps = {
  primary?: boolean
  label?: string
  ref?: Ref<HTMLInputElement>
} & JSX.InputHTMLAttributes<HTMLInputElement>

const Input: Component<InputProps> = ({ primary, label, ref, ...props }) =>
  label ? (
    <label>
      <span class={styles.label}>{label}</span>
      <input
        ref={ref}
        classList={{ [styles.input]: true, [styles.primary]: primary }}
        {...props}
      />
    </label>
  ) : (
    <input
      ref={ref}
      classList={{ [styles.input]: true, [styles.primary]: primary }}
      {...props}
    />
  )

export default Input
