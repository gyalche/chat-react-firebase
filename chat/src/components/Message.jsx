import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/chatContext';
import profile from '../img/pm.png';
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={profile} alt='' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hellow</p>
        <img src={profile} alt='' />
      </div>
    </div>
  );
};

export default Message;
