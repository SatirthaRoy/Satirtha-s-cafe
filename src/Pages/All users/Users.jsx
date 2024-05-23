import React from 'react'
import useGetUsers from '../../hooks/useGetUsers'
import SectionTitle from '../../Shared components/SectionTitle';
import UserTable from './Components/UserTable';

const Users = () => {

  const [users, refetch] = useGetUsers();
  console.log(users);

  return (
    <div className='flex-grow '>
       <SectionTitle title='MANAGE ALL USERS' phrase='How Many?'/>
       <div className='p-3 md:p-6 w-full space-y-10'>
        <div className='w-full flex justify-between items-center'>
          <h1 className='cinzel text-lg md:text-3xl font-bold'>Total Users: {users.length}</h1>
        </div>
        <UserTable users={users}/>
       </div>
    </div>
  )
}

export default Users