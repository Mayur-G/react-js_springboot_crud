import React, { Component } from 'react';
import axios from 'axios';
import EmployeeService from '../services/EmployeeService';

class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  handleUpload = async () => {
    const { file } = this.state;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/employees/upload', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileChange} />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default FileUploader;