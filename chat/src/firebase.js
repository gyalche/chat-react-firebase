// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyCdjgJ4QfqwSyhvOUweYPBnjaXTRcdRZqI',
  authDomain: 'react-chat-d9649.firebaseapp.com',
  projectId: 'react-chat-d9649',
  storageBucket: 'react-chat-d9649.appspot.com',
  messagingSenderId: '172248247682',
  appId: '1:172248247682:web:03c34a89d803099f86739b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
