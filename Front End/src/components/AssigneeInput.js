import React, { useState } from 'react';

function AssigneeInput({ onChange }) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    onChange({
      email: value,
    });
  };

  return (
    <div>
      <label>Assignee:</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter Email"
      />
    </div>
  );
}

export default AssigneeInput;
