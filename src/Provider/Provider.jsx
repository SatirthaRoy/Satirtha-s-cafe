import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const ContextProvider = createContext();

const Provider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      if(loggedUser) {
        setUser(loggedUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    })

    return () => unsubscribe();
  }, [])



  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  const obj = {
    auth,
    user,
    setUser,
    signIn,
    signUp,
    logOut,
    loading
  }


  return(
    <ContextProvider.Provider value={obj}>
      {children}
    </ContextProvider.Provider>
  )
}

export default Provider