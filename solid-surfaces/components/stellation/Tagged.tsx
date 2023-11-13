import { JSX, ParentComponent } from 'solid-js'

import styles from '../../../common/stellation.module.sass'

type Position =
  | 'top'
  | 'bottom'
  | 'rightTop'
  | 'rightBottom'
  | 'innerTop'
  | 'innerBottom'
  | 'innerRightTop'
  | 'innerRightBottom'

type TaggedProps = {
  bottom?: boolean
  right?: boolean
  inner?: boolean
} & JSX.HTMLAttributes<HTMLDivElement>

const Tagged: ParentComponent<TaggedProps> = (props) => {
  const position: Position = props.bottom
    ? props.right
      ? props.inner
        ? 'innerRightBottom'
        : 'rightBottom'
      : props.inner
      ? 'innerBottom'
      : 'bottom'
    : props.right
    ? props.inner
      ? 'innerRightTop'
      : 'rightTop'
    : props.inner
    ? 'innerTop'
    : 'top'

  return (
    <div
      {...props}
      classList={{
        [styles.tagged]: true,
        [styles.top]: position === 'top',
        [styles.bottom]: position === 'bottom',
        [styles['right-top']]: position === 'rightTop',
        [styles['right-bottom']]: position === 'rightBottom',
        [styles['inner-top']]: position === 'innerTop',
        [styles['inner-bottom']]: position === 'innerBottom',
        [styles['inner-right-top']]: position === 'innerRightTop',
        [styles['inner-right-bottom']]: position === 'innerRightBottom',
        ...props.classList,
      }}
    >
      {props.children}
    </div>
  )
}

export default Tagged
