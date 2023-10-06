import { ParentComponent } from 'solid-js'

import styles from '../../../common/typo.module.sass'

type HeaderProps = {
  margin?: boolean
}

export const Header: ParentComponent<HeaderProps> = (props) => {
  const margin = props.margin ?? true
  return (
    <h1 classList={{ [styles.header]: true, [styles.margin]: margin }}>{props.children}</h1>
  )
}

export const Subheader: ParentComponent<HeaderProps> = (props) => {
  const margin = props.margin ?? true
  return (
    <h2 classList={{ [styles.subheader]: true, [styles.margin]: margin }}>{props.children}</h2>
  )
}

export const ContrastHeader: ParentComponent<HeaderProps> = (props) => {
  const margin = props.margin ?? true
  return (
    <h3 classList={{ [styles['contrast-header']]: true, [styles.margin]: margin }}>
      {props.children}
    </h3>
  )
}

export const GutterHeader: ParentComponent<HeaderProps> = (props) => {
  const margin = props.margin ?? true
  return (
    <h4 classList={{ [styles['gutter-header']]: true, [styles.margin]: margin }}>
      {props.children}
    </h4>
  )
}
