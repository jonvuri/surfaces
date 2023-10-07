import { JSX, ParentComponent } from 'solid-js'

import styles from '../../../common/stellation.module.sass'

type TaggedProps = {
  bottom?: boolean
} & JSX.HTMLAttributes<HTMLDivElement>

const Tagged: ParentComponent<TaggedProps> = (props) => (
  <div
    {...props}
    classList={{ [styles.tagged]: true, [styles.bottom]: props.bottom, ...props.classList }}
  >
    {props.children}
  </div>
)

export default Tagged
