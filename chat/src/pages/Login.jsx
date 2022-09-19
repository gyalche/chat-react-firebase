import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
     
      navigate('/');
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> Chat Box</span>
        <span className='title'> Login</span>

        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />

          <button>Sign in</button>
          {err && <span>Username or password doesnt exist </span>}
        </form>
        <p>
          You dont have an account?{' '}
          <Link className='link' to='/register'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
