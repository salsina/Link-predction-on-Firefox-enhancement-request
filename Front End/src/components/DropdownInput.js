import React, { Component } from 'react';

class DropdownInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'Option 9', // Initial selected option
    };
  }

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Select the enhancement component</h2>
        <select value={this.state.selectedOption} onChange={this.handleOptionChange}>
          <option value="Option 9">General</option>
          <option value="Option 1">Address bar</option>
          <option value="Option 2">Bookmarks and history</option>
          <option value="Option 3">Disability access</option>
          <option value="Option 4">Downloads panel</option>
          <option value="Option 5">Enterprise policies</option>
          <option value="Option 6">Extention compatibility</option>
          <option value="Option 7">Firefox accounts</option>
          <option value="Option 8">Installer</option>
        </select>
      </div>
    );
  }
}

export default DropdownInput;
