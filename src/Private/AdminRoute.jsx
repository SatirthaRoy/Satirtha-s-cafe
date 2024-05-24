import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxios from '../hooks/useAxios'
import useData from '../hooks/useData';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
  const myAxios = useAxios();
  const {user, loading} = useData();

  const {data: admin={}, isPending} = useQuery({
    queryKey: ['admin'],
    queryFn: async ( ) => {
      const res = await myAxios(`/users/${user?.uid}`)
      return res.data;
    }
  })
  if(isPending || loading) {
    return <div className='text-8xl'>LOADING</div>
  }

  if(user && admin.role) {
    return children
  }

  return <Navigate to='/login'></Navigate>
  
}

export default AdminRoute