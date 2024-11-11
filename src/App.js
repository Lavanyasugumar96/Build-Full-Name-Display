import React, { useState } from 'react';

function FullName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (name) => {
    setFirstName(name.target.value);
  };

  const handleLastNameChange = (name) => {
    setLastName(name.target.value);
  };


  const handleSubmit = (name) => {
    name.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert('Both fields are required!');
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
      <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
         <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    {fullName && <h2>Your Full Name: {fullName}</h2>}
    </div>
  );
}

export default FullName;
