import React from 'react';
import pm from '../img/pm.png';
const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={pm} alt='' />
        <div className='userChatInfo'>
          <span>Dawa</span>
          <p>Hellow</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
