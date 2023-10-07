import React, { useState } from 'react';

function DependsOnInput({ onChange }) {
  const [dependsOn, setDependsOn] = useState('');

  const handleDependsOnChange = (e) => {
    const value = e.target.value;
    setDependsOn(value);
    onChange(value);
  };

  return (
    <div>
      <label>Depends On:</label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={dependsOn}
        onChange={handleDependsOnChange}
        placeholder="Enter Integer ID"
      />
    </div>
  );
}

export default DependsOnInput;
