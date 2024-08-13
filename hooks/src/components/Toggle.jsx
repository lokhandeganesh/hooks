import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [user, setUser] = useState('Ganesh');

  useEffect(() => {
    if (isTrue) {
      setUser('Ganesh')
    } else {
      setUser('')
    }
  }, [isTrue]);

  const onToggle = () => {
    setIsTrue((prevIsTrue) => !prevIsTrue);
  };

  return (
    <section>
      <h2>Toggle Challenge</h2>

      {isTrue ? <h4>Hello {user}</h4> : <h4>Hello There..</h4>}
      <button className="btn" onClick={onToggle}>{isTrue ? 'logout' : 'login'}</button>
    </section>
  )
};

export default Toggle;