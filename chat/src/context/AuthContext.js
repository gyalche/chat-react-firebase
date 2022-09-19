import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const onchange = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    localStorage.setItem('user', currentUser);
    return () => {
      onchange();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
