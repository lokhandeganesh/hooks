import React, { useState } from 'react'
import { data } from '../../data'

const ReducerBasic = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  };

  const resetItem = () => {
    setPeople(data);
  }

  return (
    <div>
      {
        people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          )
        })
      }

      {
        people.length < 1 ?
          (
            <button className='btn'
              style={{ marginTop: '2rem' }}
              onClick={resetItem}>Reset</button>
          )
          :
          (
            <button
              className='btn'
              style={{ marginTop: '2rem' }}
              onClick={() => { setPeople([]) }}>Clear</button>
          )
      }
    </div >
  )
}

export default ReducerBasic