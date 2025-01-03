import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    // console.log(amount);
    // Checking lower limit
    if (count <= 0) {
      amount = 1;
    }
    // Checking upper limit
    if (count > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(event) => setCount(event.target.value)}
          min={1}
          step={1}
          max={8} />
        <button type='submit' className='btn'>generate</button>
      </form>

      <article className='lorem-text'>
        {
          text.map((item, index) => {
            return (<p key={index}>{item}</p>)
          })
        }
      </article>
    </section>

  )
}

export default App;
