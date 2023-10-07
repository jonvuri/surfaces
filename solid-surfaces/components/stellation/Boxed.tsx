import { JSX, ParentComponent } from 'solid-js'

import styles from '../../../common/stellation.module.sass'

type BoxedProps = {
  accent?: boolean
  emphasis?: boolean
  half?: boolean
  inverted?: boolean
} & JSX.HTMLAttributes<HTMLDivElement>

const Boxed: ParentComponent<BoxedProps> = (props) => (
  <div
    {...props}
    classList={{
      [styles.boxed]: true,
      [styles.full]: !props.half,
      [styles.half]: props.half,
      [styles.inverted]: props.inverted,
      [styles.accent]: props.accent,
      [styles.emphasis]: !props.accent && props.emphasis,
      ...props.classList,
    }}
  >
    {props.children}
  </div>
)

export default Boxed
