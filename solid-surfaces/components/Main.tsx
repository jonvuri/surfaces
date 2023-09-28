import { JSX, Component } from 'solid-js'

import '../../common/global.sass'

type InputProps = JSX.HTMLAttributes<HTMLElement>

const Input: Component<InputProps> = (props) => <main>{props.children}</main>

export default Input
