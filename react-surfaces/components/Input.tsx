import React from 'react'

import styles from '../../common/input.module.sass'

type InputProps = React.PropsWithChildren<{
  primary?: boolean
}> &
  React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ primary, ...props }, ref) => (
  <input ref={ref} className={`${styles.input} ${primary ? styles.primary : ''}`} {...props} />
))

export default Input
