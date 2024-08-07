import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('Ganesh');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* {if(someCondition) {"won't work"}} */}
      <h2>Short Circuit</h2>
      <h4>{text || 'default value'}</h4>

      {text && (
        <h2>{name}</h2>
      )}

      {/*
      {!text && (
        <h2>{name}</h2>
      )} */}

      {user && <NameComponent name={user.name}></NameComponent>}
    </div>
  )
};

const NameComponent = ({ name }) => {
  return (
    <div>
      <h3>Name Component</h3>
      <h4>{name || 'default value'}</h4>
    </div>
  )
};

export default ShortCircuit