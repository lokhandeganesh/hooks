import React from 'react';
import Final from './tutorial/01-useState/final/03-useState-array'
import ErrorExample from './components/ErrorExample';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseEffect from './components/UseEffect';


function App() {
  return (
    <React.Fragment>
      <div className='container'>
        {/* <ErrorExample></ErrorExample> */}
        {/* <UseStateArray></UseStateArray> */}
        {/* <UseStateObject></UseStateObject> */}
        <UseEffect></UseEffect>
        {/* <Final></Final> */}
      </div>
    </React.Fragment>
  );
}

export default App;
