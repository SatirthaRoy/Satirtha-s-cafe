import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import useAxios from '../hooks/useAxios';

export const ContextProvider = createContext();

const Provider = ({children}) => {
  const myAxios = useAxios();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      if(loggedUser) {
        setUser(loggedUser);
        setLoading(false);
        myAxios.post('/jwt', loggedUser)
        .then(res => {
          // console.log(res.data);
        })
      } else {
        myAxios.post('/logout')
        .then(res => {
          console.log(res.data);
        })
        setUser(null);
        setLoading(false); 
      }
    })

    return () => unsubscribe();
  }, [myAxios])



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