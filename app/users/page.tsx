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
    //cache: 'no-store',//Don't cache (Disable cache)
    next: {
      revalidate: 60  //Fetch Data using Cron Job after Every 60 Seconds
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