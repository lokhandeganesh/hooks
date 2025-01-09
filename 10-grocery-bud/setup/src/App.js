import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hello');

    if (!name) {
      // Display alert for value is empty
      showAlert(true, 'please enter value', 'danger');

    }
    else if (name && isEditing) {
      // Deal with edit if value is present
      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name }
        }
        return item;
      }))
      setName('');
      setEditID(null);
      setIsEditing(true);
      showAlert(true, 'value changed', 'success');
    }
    else {
      // Show alert
      showAlert(true, 'Item added to the list', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }



  };

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');

    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div>
          <input type="text" className='grocery' placeholder='eg. eggs' value={name} onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'editing' : 'submit'}
          </button>
        </div>
      </form>

      {
        list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            {/* button for clear item */}
            <button className='clear-btn' onClick={clearList}>clear items</button>
          </div>
        )
      }
    </section>
  )
}

export default App
