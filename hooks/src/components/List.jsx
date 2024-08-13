import { Person } from './Person';
import React from 'react'
import { people } from '../data'

const List = () => {

  return (
    <section>
      <div>Leverage Javascript</div>
      {
        people.map((person) => {
          return (<Person key={person.id} {...person} />)
        })
      }
    </section>
  )
}

export default List