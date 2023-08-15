import React from 'react'
import styles from '../../common/button.module.sass'

type ButtonProps = React.PropsWithChildren<{
  primary?: boolean
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export default ({ primary, children, ...props }: ButtonProps) => (
  <button className={`${styles.container} ${primary ? styles.primary : ''}`} {...props}>
    {children}
  </button>
)
