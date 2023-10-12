import React, { useState } from 'react';

function SummaryInput({ onChange }) {
  const [summary, setSummary] = useState('');

  const handleSummaryChange = (e) => {
    const value = e.target.value;
    setSummary(value);
    onChange({
      summary: value,
    });
  };

  return (
    <div>
      <label>Summary:</label>
      <input
        type="text"
        value={summary}
        onChange={handleSummaryChange}
        placeholder="Enter summary"
      />
    </div>
  );
}

export default SummaryInput;
