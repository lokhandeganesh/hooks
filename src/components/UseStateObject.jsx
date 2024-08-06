import { React, useState } from 'react'

const UseStateObject = () => {
  // const [name, setName] = useState('test');
  const [age, setAge] = useState(4);
  // const [hobby, setHobby] = useState('Music');

  const [person, setPerson] = useState(
    { name: 'Peter', age: 24, hobby: 'Music' },
  )

  const displayPerson = () => {
    // setName('John'); setAge(5); setHobby('Dance');
    setPerson({ name: 'Parker', age: 25, hobby: 'Dance' })

    // To Access previous value of state
    // setAge((currentAge) => {
    //   console.log(currentAge)
    //   const newAge = currentAge + 1;
    //   return newAge;
    // })

    setTimeout(() => { setAge(age + 1) }, 3000)
    // withing 3 seconds after clicking number of times value will be same
  }
  return (
    <div>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>Enjoys : {person.hobby}</h4>
      <button type='button' className='btn' onClick={displayPerson}>Show {person.name}</button>
    </div>
  )
}

export default UseStateObject