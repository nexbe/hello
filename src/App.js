import React, { useState } from 'react';
import './App.css';
import Header from './components/header';

function App() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleClick() {
    setfirstName('');
    setLastName('');
    console.log('button click');
  }

  function handleFirstNameChange(e) {
    setfirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div className='container'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <input
          type='text'
          onChange={handleFirstNameChange}
          placeholder='Please key first Name'
        />
        <br />
        <input
          type='text'
          onChange={handleLastNameChange}
          placeholder='Please key last Name'
        />
        <br />
        firstName : {firstName}
        <br />
        last Name : {lastName}
        <hr />
      </div>
      <div className='footer'>New Footer</div>
    </div>
  );
}

export default App;
