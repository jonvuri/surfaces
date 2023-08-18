import React from 'react'

import styles from '../../common/button.module.sass'

type ButtonProps = React.PropsWithChildren<{
  primary?: boolean
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ primary, children, ...props }, ref) => (
    <button ref={ref} className={`${styles.container} ${primary ? styles.primary : ''}`} {...props}>
      {children}
    </button>
  ),
)

export default Button
