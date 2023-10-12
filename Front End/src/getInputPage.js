import React, { useState } from 'react';
import BlocksInput from './components/BlocksInput';
import DependsOnInput from './components/DependsOnInput';
import DuplicatesInput from './components/DuplicatesInput';
import RegressedByInput from './components/RegressedByInput';
import CreatorInput from './components/CreatorInput';
import AssigneeInput from './components/AssigneeInput';
import ComponentInput from './components/ComponentInput';
import ProductInput from './components/ProductInput';
import './getInputPage.css';
import SummaryInput from './components/SummaryInput';
import DropdownInput from './components/DropdownInput';

function GetInputPage() {
  const [formData, setFormData] = useState({
    blocks: '',
    dependsOn: '',
    duplicates: '',
    regressedBy: '',
    creator: {
      id: '',
      email: '',
      realName: '',
      nickName: '',
    },
    assignee: {
      email: '',
    },
    component: '',
    product: '',
    summary: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Send formData to the backend using an HTTP request (e.g., fetch or Axios)
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., display a success message)
        console.log('Data submitted successfully');
      } else {
        // Handle errors (e.g., display an error message)
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="page-container">
      <div className="blue-box">
        <h1>Enter new enhancement</h1>
        <div className="input-container">
          {/* <BlocksInput onChange={(value) => handleInputChange('blocks', value)} />
          <DependsOnInput onChange={(value) => handleInputChange('dependsOn', value)} />
          <DuplicatesInput onChange={(value) => handleInputChange('duplicates', value)} />
          <RegressedByInput onChange={(value) => handleInputChange('regressedBy', value)} /> */}
        </div>
        <div className="input-container">
          {/* <CreatorInput onChange={(value) => handleInputChange('creator', value)} />
          <AssigneeInput onChange={(value) => handleInputChange('assignee', value)} />
          <ComponentInput onChange={(value) => handleInputChange('component', value)} />
          <ProductInput onChange={(value) => handleInputChange('product', value)} /> */}
          <SummaryInput onChange={(value) => handleInputChange('summary', value)} />
          <DropdownInput />
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default GetInputPage;
