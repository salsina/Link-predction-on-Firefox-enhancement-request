import React, { useState } from 'react';

function CreatorInput({ onChange }) {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [realName, setRealName] = useState('');
  const [nickName, setNickName] = useState('');

  const handleIdChange = (e) => {
    const value = e.target.value;
    setId(value);
    onChange({
      id: value,
      email,
      realName,
      nickName,
    });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    onChange({
      id,
      email: value,
      realName,
      nickName,
    });
  };

  const handleRealNameChange = (e) => {
    const value = e.target.value;
    setRealName(value);
    onChange({
      id,
      email,
      realName: value,
      nickName,
    });
  };

  const handleNickNameChange = (e) => {
    const value = e.target.value;
    setNickName(value);
    onChange({
      id,
      email,
      realName,
      nickName: value,
    });
  };

  return (
    <div>
      <label>Creator:</label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={id}
        onChange={handleIdChange}
        placeholder="ID"
      />
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="text"
        value={realName}
        onChange={handleRealNameChange}
        placeholder="Real Name"
      />
      <input
        type="text"
        value={nickName}
        onChange={handleNickNameChange}
        placeholder="Nick Name"
      />
    </div>
  );
}

export default CreatorInput;
