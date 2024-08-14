import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="btn"
      style={{ marginBottom: '1rem' }}
      onClick={() => { setCount(count + 1) }}
    > count {count}</button>
  )
}

export default Counter