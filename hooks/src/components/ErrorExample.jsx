import { React, useState } from 'react'

const ErrorExample = () => {
  // let count = 0;
  const [count, setCount] = useState(0);
  //
  const handleClick = () => {
    setCount(count + 1);
  }
  //
  return (
    // <React.Fragment>
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>Increament</button>
    </div>
    // </React.Fragment>
  )
}

export default ErrorExample