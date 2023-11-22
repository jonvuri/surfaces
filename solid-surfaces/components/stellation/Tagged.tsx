import { JSX, ParentComponent } from 'solid-js'

import styles from '../../../common/stellation.module.sass'

type TaggedProps = {
  accent?: boolean | (() => boolean)
  topLeft?: boolean | (() => boolean)
  bottomLeft?: boolean | (() => boolean)
  topRight?: boolean | (() => boolean)
  bottomRight?: boolean | (() => boolean)
  innerTopLeft?: boolean | (() => boolean)
  innerBottomLeft?: boolean | (() => boolean)
  innerTopRight?: boolean | (() => boolean)
  innerBottomRight?: boolean | (() => boolean)
} & JSX.HTMLAttributes<HTMLDivElement>

const Tagged: ParentComponent<TaggedProps> = (props) => {
  const val = (prop?: boolean | (() => boolean)) => {
    return typeof prop === 'function' ? prop() : prop ?? false
  }

  // This doesn't actually work as expected currently, because there is only ever one
  // ::before pseudo-element. Combined on the same side will mostly work. This should
  // eventually be upgraded to create new divs here instead of using pseudo-elements.
  return (
    <div
      classList={{
        [styles.tagged]: true,
        [styles.accent]: val(props.accent),
        [styles['top-left']]: val(props.topLeft),
        [styles['bottom-left']]: val(props.bottomLeft),
        [styles['top-right']]: val(props.topRight),
        [styles['bottom-right']]: val(props.bottomRight),
        [styles['inner-top-left']]: val(props.innerTopLeft),
        [styles['inner-bottom-left']]: val(props.innerBottomLeft),
        [styles['inner-top-right']]: val(props.innerTopRight),
        [styles['inner-bottom-right']]: val(props.innerBottomRight),
        ...props.classList,
      }}
    >
      {props.children}
    </div>
  )
}

export default Tagged
