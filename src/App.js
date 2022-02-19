import React, { useState } from 'react';
import './App.css';
import Header from './components/header';

function App() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => setfirstName(e.target.value);

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const name = () => {
    return firstName + lastName;
  };

  return (
    <div className='container'>
      <div className='header'>
        <Header name={firstName + lastName} />
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
      <div className='footer'>
        {/* <Footer title="my first title for footer" /> */}
      </div>
    </div>
  );
}

export default App;
