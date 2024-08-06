import { React, useState, useEffect } from "react";


const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secValue, setSecValue] = useState(0);

  // useEffect(callbackFunction, params)
  // useEffect(() => {
  //   console.log('Hello There')
  // }, [])
  //  only invoked on initial render

  //
  useEffect(() => {
    console.log('Hello There, from first useEffect')
  }, [value])
  //

  useEffect(() => {
    console.log('Hello There, from second useEffect')
  }, [secValue])
  //  only invoked on initial render

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secValue}</h1>
      <button className='btn' onClick={() => setSecValue(secValue + 1)}>
        second value
      </button>
    </div>
  );
}

export default UseEffectBasics;
