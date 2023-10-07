import React, { useState } from 'react';

function DuplicatesInput({ onChange }) {
  const [duplicates, setDuplicates] = useState('');

  const handleDuplicatesChange = (e) => {
    const value = e.target.value;
    setDuplicates(value);
    onChange(value);
  };

  return (
    <div>
      <label>Duplicates:</label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={duplicates}
        onChange={handleDuplicatesChange}
        placeholder="Enter Integer ID"
      />
    </div>
  );
}

export default DuplicatesInput;
