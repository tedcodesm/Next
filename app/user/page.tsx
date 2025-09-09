"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserPage = () => {
  const [user , setUser] = useState([]);

  const GetUser = async () => {
   try {
     const response = await axios.get('/api/users');
    setUser(response.data);
   } catch (error) {
        console.error("Error fetching users:", error);

    
   }
  }
  useEffect(() => {
    GetUser();
  }, [])
  console.log(user);


 return (
  <div className='flex min-h-screen items-center justify-center flex-col gap-2'>
    <h1 className="text-xl font-bold">Users</h1>
    {user.length > 0 ? (
      user.map((u, index) => (
        <p key={index}>{u.name} - {u.email}</p>
      ))
    ) : (
      <p>No users found</p>
    )}
  </div>
);

}

export default UserPage