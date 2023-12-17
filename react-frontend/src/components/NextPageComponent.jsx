import React , { Component,useRef}  from 'react';
import axios from 'axios'
import uploadPic from '../pics/uploadPic.png';
import '../css/excel_upload.css';
import EmployeeService from '../services/EmployeeService';

class NextPageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            uploadStatus:''
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
          const response = await EmployeeService.uploadEmployee(formData);
          {
            this.setState({
              uploadStatus: `File "${file.name}" uploaded successfully.`,
            });
          }

          console.log(response.data);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
      const { uploadStatus } = this.state;
        return (
            <div className="container-excel">
              
               <div className="upload-excel">
               <br></br>
               <h4>Select Excel Sheet</h4>
                  <div className="upload-container">
                    
                    <input type="file" id="fileInput" class="file-input" onChange={this.handleFileChange} />
                    
                    <label for="fileInput" class="upload-button">
                    <img className= "fileUpload" src={uploadPic} height="100px" width="100px"/>
                        {/* <span class="button-text">Upload File</span> */}
                    </label>
                 </div>
                 <br></br>
                 <p>{uploadStatus}</p>   
                    <br></br>
                    <div className='uploadButton'>
                    <button className="btn btn-primary" onClick={this.handleUpload}>Upload Employee</button> 
                    </div>      
                </div>  
                <br></br>

                

                <div class="row justify-content-center">
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                </div>    
            </div>   
          
        )
    }
}

export default NextPageComponent






