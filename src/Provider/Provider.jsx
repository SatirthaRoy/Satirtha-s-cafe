import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

export const ContextProvider = createContext();

const Provider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      if(loggedUser) {
        setUser(loggedUser);
        setLoading(false);
        axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
        .then(res => {
          console.log(res.data);
        })
      } else {
        axios.post('http://localhost:5000/logout', user, {withCredentials: true})
        .then(res => {
          console.log(res.data);
        })
        setUser(null);
        setLoading(false); 
      }
    })

    return () => unsubscribe();
  }, [])



  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInPop = (provider) => {
    return signInWithPopup(auth, provider);
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
    signInPop,
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