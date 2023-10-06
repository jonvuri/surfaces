import { JSX, ParentComponent } from 'solid-js'

import styles from '../../../common/stellation.module.sass'

type LinedProps = {
  bottom?: boolean
} & JSX.HTMLAttributes<HTMLDivElement>

const Lined: ParentComponent<LinedProps> = (props) => (
  <div classList={{ [styles.lined]: true, [styles.bottom]: props.bottom }} {...props}>
    {props.children}
  </div>
)

export default Lined
