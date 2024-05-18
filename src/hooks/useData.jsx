import React, { useContext } from 'react'
import { ContextProvider } from '../Provider/Provider'

const useData = () => {
  const obj = useContext(ContextProvider)
  
  return obj;
}

export default useData