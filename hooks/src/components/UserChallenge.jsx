import React, { useState } from "react";

const User = () => {

  const [user, setUser] = useState(null);

  // Normaly connect to DB or API
  const login = () => { setUser({ name: 'Ganesh' }) };
  const logout = () => { setUser(null) };

  return (
    <section>
      <h2>user challenge</h2>
      {
        user ?
          <div>
            <h4>Hello {user.name}</h4>
            <button className="btn danger" onClick={logout}>Logout</button>
          </div>
          :
          <div>
            <h4>Hello there...</h4>
            <button className="btn" onClick={login}>Login</button>
          </div>
      }
    </section>
  )
};

export default User;