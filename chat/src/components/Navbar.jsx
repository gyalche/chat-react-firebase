import React from 'react';
import profile from '../img/pm.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Dawa Chat</span>
      <div className='user'>
        <img src={profile} alt='' />
        <span>Dawa</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
