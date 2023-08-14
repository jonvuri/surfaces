import { useState } from 'react'

import styles from '../common/button.module.sass'

const Demo = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Good Morning react-surfaces</h1>
      </header>
      <button className={styles['pink-button']} onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </>
  )
}

export default Demo
