import React, { useState } from 'react';

function ProductInput({ onChange }) {
  const [product, setProduct] = useState('');

  const handleProductChange = (e) => {
    const value = e.target.value;
    setProduct(value);
    onChange(value);
  };

  return (
    <div>
      <label>Product:</label>
      <input
        type="text"
        value={product}
        onChange={handleProductChange}
        placeholder="Enter Product"
      />
    </div>
  );
}

export default ProductInput;
