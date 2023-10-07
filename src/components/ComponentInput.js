import React, { useState } from 'react';

function ComponentInput({ onChange }) {
  const [component, setComponent] = useState('');

  const handleComponentChange = (e) => {
    const value = e.target.value;
    setComponent(value);
    onChange(value);
  };

  return (
    <div>
      <label>Component:</label>
      <input
        type="text"
        value={component}
        onChange={handleComponentChange}
        placeholder="Enter Component"
      />
    </div>
  );
}

export default ComponentInput;
