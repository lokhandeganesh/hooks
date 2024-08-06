import { React, useState, useEffect } from "react";

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers =
    async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        // console.log(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {
          users.map((user) => {
            const { avatar_url, events_url, followers_url, following_url, gists_url,
              gravatar_id, html_url, id, login, node_id, organizations_url, received_events_url,
              repos_url, site_admin, starred_url, subscriptions_url, type, git_url } = user

            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default FetchData;
