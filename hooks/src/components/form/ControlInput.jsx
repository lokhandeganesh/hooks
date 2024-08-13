import React, { useState } from 'react'
import { data } from '../../data';

const ControlInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState(data);

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) { return }

    // console.log(name);
    // { id: 1, name: 'john' }
    const id = Date.now();
    const newUser = { id: id, name }
    const updatedUser = [...users, newUser]
    setUsers(updatedUser);
    setName('');
  }

  const removeUser = (id) => {
    const updatedUser = users.filter((person) => person.id != id)
    setUsers(updatedUser);
  }

  return (
    <section>
      <form action="" className='form' onSubmit={handleSubmit}>
        <h4>ControlInput</h4>
        <div className='form-row'>
          <label htmlFor="name" className='form-label'>name</label>
          <input type="text" className='form-input' id="name" value={name} onChange={handleChange} />
        </div>
        <button type="submit" className='btn btn-block'>Submit</button>
      </form>
      {
        users.map((user) => {
          // console.log(user)
          return (
            <div key={user.id}>
              <h4 >{user.name}</h4>
              <button className='btn' onClick={() => removeUser(user.id)}>remove</button>
            </div>
          )
        })
      }
    </section>
  )
}

export default ControlInput