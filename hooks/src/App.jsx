import React from 'react';
import Final from './tutorial/01-useState/final/03-useState-array'
import ErrorExample from './components/ErrorExample';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseEffect from './components/UseEffect';
import MultipleReturns from './components/MultipleReturns';
import ShortCircuit from './components/ShortCircuit';
import Toggle from './components/Toggle';
import User from './components/UserChallenge';
import Navbar from './components/navbar';
import { Home, About } from './components/pages'
import Group from './components/group';
import List from './components/List';
import ControlInput from './components/form/ControlInput';
// import MultipleInputs from './components/form/MultipleInputs';
import OtherInput from './components/form/OtherInput';
import FormDataApi from './components/form/FormDataApi';
import UseRefBasics from './components/useRefBasic/UseRefBasics';

import ToggleCustom from './components/customHooks/Toggle';
import FetchData from './components/customHooks/FetchData';

import NavbarContext from './components/contextApi/Navbar';

function App() {
  return (
    <React.Fragment>
      <div className=''>
        {/* <ErrorExample></ErrorExample> */}
        {/* <UseStateArray></UseStateArray> */}
        {/* <UseStateObject></UseStateObject> */}
        {/* <UseEffect></UseEffect> */}
        {/* <MultipleReturns></MultipleReturns> */}
        {/* <ShortCircuit></ShortCircuit> */}
        {/* <Toggle></Toggle> */}
        {/* <User></User> */}
        {/* <Navbar></Navbar> */}
        {/* <Final></Final> */}
        {/* <Home></Home> */}
        {/* <About></About> */}
        {/* <Group></Group> */}
        {/* <List></List> */}
        {/* <ControlInput></ControlInput> */}
        {/* <MultipleInputs></MultipleInputs> */}
        {/* <OtherInput></OtherInput> */}
        {/* <FormDataApi></FormDataApi> */}
        {/* <UseRefBasics></UseRefBasics> */}
        {/* <ToggleCustom></ToggleCustom> */}
        {/* <FetchData></FetchData> */}
      </div>
      <NavbarContext></NavbarContext>
    </React.Fragment>
  );
}

export default App;
