import React, { useState } from 'react'

const ControlInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setName(e.target.value)
  }
  return (
    <form action="" className='form'>
      <h4>ControlInput</h4>
      <div className='form-row'>
        <label htmlFor="name" className='form-label'>name</label>
        <input type="text" className='form-input' id="name" value={name} onChange={handleChange} />
      </div>
      <div className='form-row'>
        <label htmlFor="email" className='form-label'>email</label>
        <input type="email" className='form-input' id="email" onChange={(e) => { setEmail(e.target.value) }} />
      </div>
      <button type="submit" className='btn btn-block'>Submit</button>
    </form>
  )
}

export default ControlInput