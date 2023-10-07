import React, { useState } from 'react';

function BlocksInput({ onChange }) {
  const [blocks, setBlocks] = useState('');

  const handleBlocksChange = (e) => {
    const value = e.target.value;
    setBlocks(value);
    onChange(value);
  };

  return (
    <div>
      <label>Blocks:</label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={blocks}
        onChange={handleBlocksChange}
        placeholder="Enter Integer ID"
      />
    </div>
  );
}

export default BlocksInput;
