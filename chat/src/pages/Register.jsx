import React, { useState } from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storage = getStorage();
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, 'userChats', response.user.uid), {});
            navigate('/');
          });
        }
      );
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> Chat Box</span>
        <span className='title'> Register</span>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{ display: 'none' }} type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Choose an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account?{' '}
          <Link className='link' to='/login'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
