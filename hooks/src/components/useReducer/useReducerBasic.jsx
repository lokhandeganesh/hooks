import React, { useState, useReducer } from 'react'
import { data } from '../../data'
import { CLEAR_ITEM, REMOVE_ITEM, RESET_ITEM } from './actions'
import reducer from './reducer'

const defaultState = {
  people: data,
  isLoading: false
}

const ReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  };

  const clearItem = () => {
    dispatch({ type: CLEAR_ITEM })
  };

  const resetItem = () => {
    dispatch({ type: RESET_ITEM })
  };

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