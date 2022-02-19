import React from 'react';

function Header(props) {
  return (
    <>
      <div className='menu'>
        <a href='/'>Home</a>
      </div>
      <div className='menu'>
        <a href='/'>Product</a>
      </div>
      <div className='menu'>
        <a href='/'>Service</a>
      </div>
      <div className='menu'>
        <a href='/'>About</a>
      </div>
    </>
  );
}

export default Header;
