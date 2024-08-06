import { React, useState, useEffect } from "react";

const url = 'https://api.github.com/users/lokhandeganesh';
const MultipleReturns = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchUsers =
    async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
        // console.log(data)
        // console.log(response)
      } catch (error) {
        setIsError(true);
        console.error('Error:', error);
      }
      setIsLoading(false);
    };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) { return (<h2>Loading .....</h2>) };
  if (isError) { return (<h2>There was an error .....</h2>) };

  // const { name, avatar_url, login, html_url } = user;
  return (
    <section>
      {/* Because user is object now and not list we will access the details using dot method */}
      <h2>{user.name}</h2>
      <div>
        <img src={user.avatar_url} alt="" style={{ width: '150px', borderRadius: '25px' }} />
        <h5>User Name: {user.login}</h5>
        <p>{user.bio}</p>
        <a href={user.html_url}>Visit to Profile</a>
      </div>
    </section>
  )
}

export default MultipleReturns

