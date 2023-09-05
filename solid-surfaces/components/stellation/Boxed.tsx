import { JSX, ParentComponent } from 'solid-js'

import styles from '../../../common/stellation.module.sass'

type BoxedProps = {
  accent?: boolean
  emphasis?: boolean
  half?: boolean
  inverted?: boolean
} & JSX.HTMLAttributes<HTMLDivElement>

const Boxed: ParentComponent<BoxedProps> = ({
  accent,
  emphasis,
  half,
  inverted,
  children,
  ...props
}) => (
  <div
    classList={{
      [styles.boxed]: true,
      [styles.full]: !half,
      [styles.half]: half,
      [styles.inverted]: inverted,
      [styles.accent]: accent,
      [styles.emphasis]: !accent && emphasis,
    }}
    {...props}
  >
    {children}
  </div>
)

export default Boxed
