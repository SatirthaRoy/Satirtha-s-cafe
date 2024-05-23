import React from 'react'
import useData from '../hooks/useData'
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {

  const {user, loading} = useData();

  if(loading) {
    return <div className='font-bold text-6xl'>Loading</div>
  }

  if(user) {
    return children
  }

  return <Navigate to='/login'></Navigate>
}

export default Private