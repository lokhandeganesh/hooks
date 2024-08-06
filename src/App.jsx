import React from 'react';
import Final from './tutorial/01-useState/final/03-useState-array'
import ErrorExample from './components/ErrorExample';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        {/* <ErrorExample></ErrorExample> */}
        {/* <UseStateArray></UseStateArray> */}
        <UseStateObject></UseStateObject>
        {/* <Final></Final> */}
      </div>
    </React.Fragment>
  );
}

export default App;
