import React, { useState } from 'react';

function RegressedByInput({ onChange }) {
  const [regressedBy, setRegressedBy] = useState('');

  const handleRegressedByChange = (e) => {
    const value = e.target.value;
    setRegressedBy(value);
    onChange(value);
  };

  return (
    <div>
      <label>Regressed By:</label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={regressedBy}
        onChange={handleRegressedByChange}
        placeholder="Enter Integer ID"
      />
    </div>
  );
}

export default RegressedByInput;
