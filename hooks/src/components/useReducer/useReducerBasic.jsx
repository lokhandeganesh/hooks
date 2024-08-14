import React, { useState, useReducer } from 'react'
import { data } from '../../data'

const defaultState = {
  people: data,
  isLoading: false
}

const CLEAR_ITEM = 'CLEAR_ITEM'
const RESET_ITEM = 'RESET_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

const reducer = (state, action) => {
  // console.log(action)
  if (action.type === CLEAR_ITEM) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_ITEM) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    // console.log(action);
    let newPeople = state.people.filter((person) => person.id != action.payload.id);
    return { ...state, people: newPeople };
  }
  // return state
  throw new Error(`No matching "${action.type}" - action type`);
}


const ReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id != id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  };

  const clearItem = () => {
    // setPeople([])
    dispatch({ type: CLEAR_ITEM })
  };

  const resetItem = () => {
    // setPeople(data)
    dispatch({ type: RESET_ITEM })
  };

  // console.log(state)

  return (
    <div>
      {
        state.people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button className='btn' onClick={() => removeItem(id)}>Remove</button>
            </div>
          )
        })
      }

      {
        state.people.length < 1 ?
          (
            <button className='btn'
              style={{ marginTop: '2rem' }}
              onClick={resetItem}>Reset All</button>
          )
          :
          (
            <button
              className='btn'
              style={{ marginTop: '2rem' }}
              onClick={clearItem}>Clear All</button>
          )
      }
    </div >
  )
}

export default ReducerBasic