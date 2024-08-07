import React from 'react';
import Final from './tutorial/01-useState/final/03-useState-array'
import ErrorExample from './components/ErrorExample';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseEffect from './components/UseEffect';
import MultipleReturns from './components/MultipleReturns';
import ShortCircuit from './components/ShortCircuit';
import Toggle from './components/Toggle';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        {/* <ErrorExample></ErrorExample> */}
        {/* <UseStateArray></UseStateArray> */}
        {/* <UseStateObject></UseStateObject> */}
        {/* <UseEffect></UseEffect> */}
        {/* <MultipleReturns></MultipleReturns> */}
        {/* <ShortCircuit></ShortCircuit> */}
        <Toggle></Toggle>
        {/* <Final></Final> */}
      </div>
    </React.Fragment>
  );
}

export default App;
