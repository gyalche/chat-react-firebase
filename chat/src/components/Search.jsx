import React from 'react';
import pm from '../img/pm.png';
const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user' />
      </div>
      <div className='userChat'>
        <img src={pm} alt='' />
        <div className='userChatInfo'>
          <span>Dawa</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
