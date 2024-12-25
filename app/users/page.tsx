import React from 'react'


interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
const UsersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      revalidate: 60
    }
  });

  const users: User[] = await res.json();
  return (
    <>
    <div>Users Page</div>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name},EMail : {user.email}</li>
      ))}
      <li></li>
    </ul>
    </>
  )
}

export default UsersPage