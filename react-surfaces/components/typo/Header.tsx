import React from 'react'

import styles from '../../../common/typo.module.sass'

type HeaderProps = {
  children?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <h1 className={styles.header}>{children}</h1>
)

export const Subheader: React.FC<HeaderProps> = ({ children }) => (
  <h2 className={styles.subheader}>{children}</h2>
)

export const ContrastHeader: React.FC<HeaderProps> = ({ children }) => (
  <h3 className={styles['contrast-header']}>{children}</h3>
)

export const GutterHeader: React.FC<HeaderProps> = ({ children }) => (
  <h4 className={styles['gutter-header']}>{children}</h4>
)
