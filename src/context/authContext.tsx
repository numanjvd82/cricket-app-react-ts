import { createContext, useContext, useState, useEffect } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  user: User;
  signInWithGoogle: () => void;
  signOutUser: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

type AuthContextProviderType = {
  children: React.ReactNode;
};

async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

async function signOutUser() {
  await signOut(auth);
}

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({} as User);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  if (!useContext(AuthContext)) {
    throw new Error('useAuthContext must be used within AuthContextProvider');
  }
  return useContext(AuthContext);
};
function setUser(user: User) {
  throw new Error('Function not implemented.');
}
