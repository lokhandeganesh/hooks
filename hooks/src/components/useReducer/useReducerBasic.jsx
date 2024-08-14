import React, { useState, useReducer } from 'react'
import { data, people } from '../../data'

const defaultState = {
  people: data,
  isLoading: false
}

const reducer = (state, action) => {
  // console.log(action)
  if (action.type === 'CLEAR_ITEM') {
    return { ...state, people: [] };
  }

}


const ReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id != id);
    // setPeople(newPeople);
  };

  const clearItem = () => {
    dispatch({ type: 'CLEAR_ITEM' })
    // setPeople([])
  };

  const resetItem = () => {
    // setPeople(data)
  };

  console.log(state)

  return (
    <div>
      {
        state.people.map((person) => {
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
        state.people.length < 1 ?
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
              onClick={clearItem}>Clear</button>
          )
      }
    </div >
  )
}

export default ReducerBasic