import { JSX, ParentComponent } from 'solid-js'

import styles from '../../../common/stellation.module.sass'

type TaggedProps = {
  bottom?: boolean
} & JSX.HTMLAttributes<HTMLDivElement>

const Tagged: ParentComponent<TaggedProps> = (props) => (
  <div classList={{ [styles.tagged]: true, [styles.bottom]: props.bottom }} {...props}>
    {props.children}
  </div>
)

export default Tagged
