import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBuV6r_dvwMz0stylNmL4RfCuZLFHljbvc',
  authDomain: 'livecric-e81b0.firebaseapp.com',
  projectId: 'livecric-e81b0',
  storageBucket: 'livecric-e81b0.appspot.com',
  messagingSenderId: '1039721488123',
  appId: '1:1039721488123:web:bcf8b18f3c31c051829a5e',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
